process.on("message", (msg) => {
  console.log("Message from parent:", msg);
  process.send("I have started listening to the parent process");
});
let counter = 0;
setInterval(() => {
  if (counter === 10) {
    process.send({ counter: counter, message: "I am done! sending messages" });
    process.exit(0);
  }
  process.send({ counter: counter++, message: "new message from child!" });
}, 1000);
