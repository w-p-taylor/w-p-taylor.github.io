/*
 * Live "memory cell" background: a grid of cells that light up near the
 * cursor and flicker now and then, like a memory being read and written.
 * Falls back to the static CSS dot grid if this script does not run.
 */
(function () {
  var root = document.documentElement;
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext && canvas.getContext("2d");
  if (!ctx) return;

  var GAP = 22;            // grid spacing, matches the CSS dot grid
  var RADIUS = 110;        // cursor influence radius in px
  var BASE_ALPHA = 0.08;   // resting cell opacity
  var FRAME_MS = 33;       // ~30fps is plenty for this
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var width, height, cols, rows, heat, color;
  var lastFrame = 0;
  var running = false;

  canvas.className = "wt-cells";
  canvas.setAttribute("aria-hidden", "true");
  document.body.insertBefore(canvas, document.body.firstChild);
  root.classList.add("wt-cells-on");

  function readColor() {
    color = getComputedStyle(root).getPropertyValue("--wt-accent").trim() || "#0b2a5b";
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(width / GAP) + 1;
    rows = Math.ceil(height / GAP) + 1;
    heat = new Float32Array(cols * rows);
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var h = heat[r * cols + c];
        var size = 2 + h * 4;
        ctx.globalAlpha = BASE_ALPHA + h * 0.65;
        ctx.fillRect(c * GAP + 1 - size / 2, r * GAP + 1 - size / 2, size, size);
      }
    }
    ctx.globalAlpha = 1;
  }

  // Light up the cells around a point
  function touch(x, y) {
    var c0 = Math.max(0, Math.floor((x - RADIUS) / GAP));
    var c1 = Math.min(cols - 1, Math.ceil((x + RADIUS) / GAP));
    var r0 = Math.max(0, Math.floor((y - RADIUS) / GAP));
    var r1 = Math.min(rows - 1, Math.ceil((y + RADIUS) / GAP));
    for (var r = r0; r <= r1; r++) {
      for (var c = c0; c <= c1; c++) {
        var dx = c * GAP - x, dy = r * GAP - y;
        var p = 1 - Math.sqrt(dx * dx + dy * dy) / RADIUS;
        if (p > 0) {
          var k = r * cols + c;
          heat[k] = Math.max(heat[k], p * p * 0.9);
        }
      }
    }
    start();
  }

  // Occasional random accesses: a single cell or a short "cache line" burst
  function randomAccess() {
    var r = Math.floor(Math.random() * rows);
    var c = Math.floor(Math.random() * cols);
    var len = Math.random() < 0.35 ? 4 + Math.floor(Math.random() * 5) : 1;
    for (var i = 0; i < len && c + i < cols; i++) {
      heat[r * cols + c + i] = 0.7;
    }
  }

  function frame(now) {
    if (document.hidden) { running = false; return; }
    requestAnimationFrame(frame);
    if (now - lastFrame < FRAME_MS) return;
    lastFrame = now;
    for (var k = 0; k < heat.length; k++) {
      if (heat[k] > 0.003) heat[k] *= 0.93; else heat[k] = 0;
    }
    if (Math.random() < 0.12) randomAccess();
    draw();
  }

  function start() {
    if (reduceMotion || running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  readColor();
  resize();
  window.addEventListener("resize", resize);
  // Redraw in the new colour when the light/dark toggle changes the theme
  new MutationObserver(function () { readColor(); draw(); })
    .observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  if (reduceMotion) return;
  window.addEventListener("pointermove", function (e) { touch(e.clientX, e.clientY); }, { passive: true });
  document.addEventListener("visibilitychange", start);
  start();
})();
