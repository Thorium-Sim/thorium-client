window.updateServers = function(servers) {
  if (servers.length === 0) {
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("servers").classList.add("hidden");
  } else {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("servers").classList.remove("hidden");
  }
  const markup = servers.map(
    s => `<button onclick="loadPage('${s.url}')">${s.name}</button>`
  );
  document.getElementById("serverList").innerHTML = markup;
};
