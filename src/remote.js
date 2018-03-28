const powerOff = require("power-off");
const sleepMode = require("sleep-mode");
const freakout = require("./freakout");

module.exports = function(message, win) {
  console.log("Got Message");
  console.log(message);
  if (message) {
    switch (message.action) {
      case "freak":
        freakout();
        break;
      case "beep":
        process.stdout.write("\x07");
        break;
      case "shutdown":
        powerOff(function(err) {
          if (err) {
            throw new Error("Can't run power-off");
          }
        });
        break;
      case "restart":
        break;
      case "sleep":
        sleepMode(function(err) {
          if (err) {
            throw new Error("Can't run sleep");
          }
        });
        break;
      case "quit":
        win.close();
        break;
      default:
        break;
    }
  }
};
