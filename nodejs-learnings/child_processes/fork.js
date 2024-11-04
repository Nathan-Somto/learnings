const { fork } = require("node:child_process");
const normal = fork("child_program.js", ["normal"]);
const special = fork("schild_program.js", ["special"]);
const server = require("net").createServer({ pauseOnConnect: true });
normal.on("message", (msg) => {
  console.log("Message from child:", msg);
});
normal.send("I have started listening to the child process");
server.on("connection", (socket) => {
    console.log(socket)
 if(socket.remoteAddress === ""){
    special.send("socket", socket);
    return;
 }
    normal.send("socket", socket);
});
server.listen(1337);