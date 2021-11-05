const http = require("http");

//const hostname = "localhost";
//const hostname = "10.0.2.15";
const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(
    `Le serveur a reçu une requête l'URL suivant: http://${hostname}:${port} requete:` +
      req.url
  );
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Bonjour le monde!\n");
});

server.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
