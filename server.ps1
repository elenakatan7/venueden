$root = 'C:\Users\elena\Documents\venue'
$port = if ($env:PORT) { [int]$env:PORT } else { 8081 }
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port/"

# Handle each request in its own runspace so a slow client can't starve the others
$pool = [runspacefactory]::CreateRunspacePool(1, 16)
$pool.Open()

$handler = {
    param($ctx, $root)
    $res = $ctx.Response
    try {
        $urlPath = $ctx.Request.Url.AbsolutePath
        if ($urlPath -eq '/' -or $urlPath -eq '') { $urlPath = '/index.html' }
        $filePath = Join-Path $root ($urlPath.TrimStart('/').Replace('/', '\'))
        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css' }
                '.js'   { 'application/javascript' }
                '.png'  { 'image/png' }
                '.jpg'  { 'image/jpeg' }
                '.svg'  { 'image/svg+xml' }
                '.webp' { 'image/webp' }
                '.mp4'  { 'video/mp4' }
                '.ico'  { 'image/x-icon' }
                default { 'application/octet-stream' }
            }
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $res.ContentType = $mime
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes('Not found')
            $res.OutputStream.Write($msg, 0, $msg.Length)
        }
    } catch {} finally {
        try { $res.OutputStream.Close() } catch {}
    }
}

while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $ps = [powershell]::Create()
    $ps.RunspacePool = $pool
    $null = $ps.AddScript($handler.ToString()).AddArgument($ctx).AddArgument($root)
    $null = $ps.BeginInvoke()
}
