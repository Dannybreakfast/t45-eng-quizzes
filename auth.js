(function () {
  var FLAG = "t45_gate";
  var TTL_MS = 8 * 60 * 60 * 1000;

  function isUnlocked() {
    try {
      var raw = localStorage.getItem(FLAG);
      if (!raw) return false;
      var until = parseInt(raw, 10);
      if (!until || Date.now() > until) {
        localStorage.removeItem(FLAG);
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  function persistUnlock() {
    try {
      localStorage.setItem(FLAG, String(Date.now() + TTL_MS));
    } catch (e) {}
  }

  if (isUnlocked()) return;

  var expect = String.fromCharCode(103, 111, 115, 104, 97, 119, 107);
  var css =
    "#t45-gate{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;" +
    "background:#0f1419;color:#e7eef7;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}" +
    "#t45-gate .box{width:min(360px,92vw);background:#1a2332;border:1px solid #2e3d52;border-radius:12px;padding:1.5rem 1.35rem;box-shadow:0 12px 40px rgba(0,0,0,.45)}" +
    "#t45-gate h1{margin:0 0 .35rem;font-size:1.25rem}" +
    "#t45-gate p{margin:0 0 1rem;color:#9bb0c7;font-size:.92rem}" +
    "#t45-gate input{width:100%;box-sizing:border-box;padding:.7rem .8rem;border-radius:8px;border:1px solid #2e3d52;" +
    "background:#243044;color:#e7eef7;font:inherit;margin-bottom:.75rem}" +
    "#t45-gate input:focus{outline:none;border-color:#3d9cf0}" +
    "#t45-gate button{width:100%;padding:.7rem .8rem;border:none;border-radius:8px;background:#3d9cf0;color:#041018;" +
    "font:inherit;font-weight:700;cursor:pointer}" +
    "#t45-gate button:hover{filter:brightness(1.08)}" +
    "#t45-gate .err{color:#e74c3c;font-size:.85rem;min-height:1.2em;margin:0 0 .55rem}";

  function lock() {
    document.documentElement.style.visibility = "hidden";
  }

  function unlock() {
    persistUnlock();
    var gate = document.getElementById("t45-gate");
    var style = document.getElementById("t45-gate-style");
    if (gate) gate.remove();
    if (style) style.remove();
    document.documentElement.style.visibility = "";
  }

  function showGate() {
    if (document.getElementById("t45-gate")) return;
    var style = document.createElement("style");
    style.id = "t45-gate-style";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);

    var gate = document.createElement("div");
    gate.id = "t45-gate";
    gate.innerHTML =
      '<div class="box"><h1>T-45 Quizzes</h1><p>Enter access code to continue.</p>' +
      '<div class="err" id="t45-gate-err"></div>' +
      '<form id="t45-gate-form" autocomplete="off">' +
      '<input id="t45-gate-input" type="password" autocomplete="current-password" autofocus placeholder="Access code"/>' +
      '<button type="submit">Unlock</button></form></div>';
    (document.body || document.documentElement).appendChild(gate);
    document.documentElement.style.visibility = "";

    var form = document.getElementById("t45-gate-form");
    var input = document.getElementById("t45-gate-input");
    var err = document.getElementById("t45-gate-err");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === expect) {
        unlock();
      } else {
        err.textContent = "Incorrect code.";
        input.value = "";
        input.focus();
      }
    });
    setTimeout(function () {
      try {
        input.focus();
      } catch (e) {}
    }, 0);
  }

  lock();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGate);
  } else {
    showGate();
  }
})();
