/* VenueDen shared motion layer: Lenis smooth scroll + magnetic buttons.
   Idempotent — safe if a page also has its own init. Degrades to native
   scroll when the library is missing or reduced-motion is set. */
(function () {
  if (window.__vdMotion) return;
  window.__vdMotion = true;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && window.Lenis && !document.documentElement.classList.contains('lenis')) {
    var lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true });
    var loop = function (t) { lenis.raf(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }

  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + (mx * 0.18).toFixed(1) + 'px,' + (my * 0.28).toFixed(1) + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }
})();
