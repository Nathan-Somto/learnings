const http = require("http");
const fs = require("fs");
const path = require("path");
const people = [
  {
    id: 1,
    name: "John Doe",
    dob: "01/01/1990",
    email: "johndoe@gmail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    dob: "01/01/1991",
    email: "janedoe@gmail.com",
  },
];
const server = http.createServer((req, res) => {
  req.headers["content-type"] = "application/json";
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    // send the form.html file
    const stream = fs
      .createReadStream(path.join(__dirname, "form.html"))
      .pipe(res);
    stream.on("error", (err) => {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Internal Server Error" }));
    });
  } else if (req.url.split('/')[1] === "people") {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const { name, dob, email } = JSON.parse(body);
        const id = people.length + 1;
        people.push({ id, name, dob, email });
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Person added successfully" }));
      });
    } else {
        console.log(req.url.split("/"))
      if (req.url.split("/")[2]) {
        const id = req.url.split("/")[2];
        const person = people.find((person) => person.id === parseInt(id));
        if (person) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ person }));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Not Found" }));
        }
        return;

      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ people }));
    }
  } else {
    console.log(req.method);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});
server.listen(8080);
server.on("listening", () => {
  console.log("Server is listening on port 8080");
});
