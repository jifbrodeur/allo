const http = require("http"); //charge le module pour parler à un client HTTP
const hostname = "localhost"; //pour écouter sur une machine et un port
const port = 3000;

const serveur = http.createServer((requete, reponse) => {
  reponse.statusCode = 200;
  reponse.setHeader("Content-Type", "text/html");
  reponse.end("Bonjour le monde!\n");
});

//main
serveur.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
