const initHotkeys = require("./hotkeys");
const startBonjour = require("./bonjour");
const loadPage = require("./loadPage");
module.exports = function startWindow() {
  nw.Window.open(
    "src/page/index.html",
    {
      title: "Thorium",
      width: 700,
      height: 600,
      resizable: false
    },
    function(win) {
      initHotkeys(win);
      startBonjour(win);
      win.window.loadPage = url => loadPage(url, win);
    }
  );
};
