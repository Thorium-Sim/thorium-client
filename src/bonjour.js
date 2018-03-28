const bonjour = require("bonjour")();
const loadPage = require("./loadPage");

module.exports = function startBonjour(win) {
  bonjour.find({ type: "thorium-http" }, newService);
  const servers = [];
  const autoLoad = () => {
    if (servers.length === 1) {
      loadPage(servers[0].url, win);
    } else if (servers.length === 0) {
      setTimeout(autoLoad, 3000);
    }
  };
  const autoloadTimeout = setTimeout(autoLoad, 3000);
  function newService(service) {
    if (
      service.name.indexOf("Thorium") > -1 ||
      service.type === "thorium-http" ||
      service.type === "local"
    ) {
      const ipregex = /[0-2]?[0-9]{1,2}\.[0-2]?[0-9]{1,2}\.[0-2]?[0-9]{1,2}\.[0-2]?[0-9]{1,2}/gi;
      const address = service.addresses.find(a => ipregex.test(a));
      const uri = `http://${address}:${service.port}/client`;
      servers.push({
        name: service.host,
        url: uri
      });
    }
  }
  function sendUpdate() {
    if (win.window.location.href.indexOf("client") === -1) {
      win.window.updateServers && win.window.updateServers(servers);
    }
    setTimeout(sendUpdate, 1000);
  }
  sendUpdate();
};
