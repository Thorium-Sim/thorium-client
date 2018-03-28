module.exports = function initHotKeys(win) {
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Command+d",
      active: () => {
        const ip = prompt(
          "Enter the IP address of the server, including the port."
        );
        console.log(ip);
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Ctrl+d",
      active: () => {
        const ip = prompt(
          "Enter the IP address of the server, including the port."
        );
        console.log(ip);
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Command+r",
      active: () => {
        win.reload();
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Ctrl+r",
      active: () => {
        win.reload();
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Command+q",
      active: () => {
        return null;
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Command+Alt+q",
      active: () => {
        nw.App.quit();
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Ctrl+Alt+q",
      active: () => {
        nw.App.quit();
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Ctrl+q",
      active: () => {
        return null;
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Ctrl+Alt+k",
      active: function() {
        const kiosk = win.isKioskMode;
        win.toggleKioskMode();
        if (kiosk) {
          win.width = 1024;
          win.height = 576;
        }
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Command+Alt+k",
      active: function() {
        const kiosk = win.isKioskMode;
        win.toggleKioskMode();
        if (kiosk) {
          win.width = 1024;
          win.height = 576;
        }
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Ctrl+Alt+i",
      active: function() {
        if (win.isDevToolsOpen) {
          win.closeDevTools();
        }
        return win.showDevTools();
      }
    })
  );
  nw.App.registerGlobalHotKey(
    new nw.Shortcut({
      key: "Command+Alt+i",
      active: function() {
        if (win.isDevToolsOpen) {
          win.closeDevTools();
        }
        return win.showDevTools();
      }
    })
  );
};
