const http = require("http"); //module interne pour créer un serveur http
const fs = require("fs"); //module pour lire les fichiers du SE
const path = require("path"); //module pour décortiquer le chemin URL
//const hostname = "0.0.0.0"; //afin d'écouter sur tous les adresses de ma VM (à Chicago)
const hostname = "localhost";
const port = 3000; //port de l'écoute, standard http: 80, https: 443

const serveur = http.createServer((requete, reponse) => {
  console.log(
    `Le serveur a reçu une requête l'URL suivant: http://${hostname}:${port} requete:` +
      requete.url
  );

  let fichier = "." + requete.url; //utilisation du répertoire courant
  if (fichier == "./") {
    fichier = "./index.html"; //si aucun fichier n'est demandé prendre index.html
  }
  let extension = String(path.extname(fichier)).toLowerCase(); //extrait l'extension du nom de fichier

  if (fichier) {
    fs.readFile(fichier, function (erreur, data) {
      if (erreur) {
        if (erreur.code == "ENOENT") {
          fs.readFile("./404.html", function (erreur, content) {
            reponse.writeHead(404, { "Content-Type": "text/html" });
            reponse.end(content, "utf-8");
          });
        } else {
          reponse.writeHead(500);
          reponse.end(
            `Désolé, vérifier avec l'Administrateur du site pour l'erreur: ${error.code}..\n`
          );
        }
      } else {
        let typeMIME = traiterMIME(extension);
        reponse.statusCode = 200;
        reponse.setHeader("Content-Type", typeMIME);
        reponse.end(data);
      }
    });
  }
});

function traiterMIME(extension) {
  const typesMIME = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
  };
  return typesMIME[extension] || "application/octet-stream"; // retourne le type MIME associé à l'extension
}

//main
serveur.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
