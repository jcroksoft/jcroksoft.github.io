(function () {
  var KEY = "roksoft-lang";
  var root = document.documentElement;

  function pick() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "ko" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  }

  function apply(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    var buttons = document.querySelectorAll(".lang button[data-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.lang === lang));
    }
  }

  apply(pick());

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".lang button[data-lang]");
    if (!button) return;
    var lang = button.dataset.lang;
    apply(lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  });
})();
