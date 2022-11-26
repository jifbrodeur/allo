const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(
    `Le serveur a reçu une requête l'URL suivant: http://${hostname}:${port} requete: ${req.url}`
  );
  res.statusCode = 200;
  if (req.url == "/index.html") {
    fs.readFile("index.html", function (err, data) {
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.end("Bonjour le monde!\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
