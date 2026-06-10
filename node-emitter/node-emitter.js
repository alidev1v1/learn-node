// node using it event and listenr all time and its aproch called observer pattern

const eventEmitter = require("events");
const celebrity = new eventEmitter();
//object      // event   // observer or listener
celebrity.on("race lose", () => {
  console.log("boo");
});

celebrity.on("race win", () => {
  console.log("ok");
});

//emetting the event
celebrity.emit("race lose");
