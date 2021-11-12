const http = require("http");
const hostname = "0.0.0.0"; //pour écouter sur tous les ports dans le cas d'une VM
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Bonjour le monde!\n");
});

server.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
