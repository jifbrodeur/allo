const http = require("http"); //charge le module pour parler à un client HTTP
const hostname = "localhost"; //pour écouter sur une machine et un port
const url = require("url");
const port = 3010;

const server = http.createServer((req, res) => {
  console.log(
    `Le serveur a reçu une requête l'URL suivant: http://${hostname}:${port} requete: ${req.url}`
  );
  const reqUrl = url.parse(req.url, true);
  console.log(`reqUrl: ${reqUrl}`);
  const route = reqUrl.pathname;
  const nom = reqUrl.query.nom;
  const motdepasse = reqUrl.query.mdp;

  console.log(`nom: ${nom} motdepasse: ${motdepasse}`);
  res.statusCode = 200;

  if (route == "/index.html") {
    res.setHeader("Content-Type", "text/plain");
    res.end(
      `Vous avez demandé index.html!  nom: ${nom} mot de passe: ${motdepasse}\n`
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
