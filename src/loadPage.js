const remote = require("./remote");
module.exports = function loadPage(url, win) {
  localStorage.setItem("thorium_url", url);
  win.window.localStorage.setItem("thorium_url", url);

  win.window.location = url;
  setTimeout(() => {
    if (win.window.location.protocol.indexOf("error") > -1) {
      localStorage.setItem("thorium_url", "");
      win.window.location = "src/page/index.html";
    } else {
      win.enterKioskMode();
      initWindow(win);
    }
  }, 1000);
  return;
};

function initWindow(win) {
  const clientId = win.window.localStorage.getItem("thorium_clientId");
  if (clientId !== require("os").hostname()) {
    win.window.localStorage.setItem(
      "thorium_clientId",
      require("os").hostname()
    );
    win.window.location.reload();
  }
  win.window.thorium = {
    sendMessage: message => {
      return remote(message, win);
    }
  };
}
