const http = require("http"); //module interne pour créer un serveur http
const fs = require("fs"); //module pour lire les fichiers du SE
const path = require("path"); //module pour décortiquer le chemin URL
const MIMEType = require("./MIMEType.js"); //module qui export un objet des extension et MIME Type
const hostname = "localhost";
const port = 3010; //port de l'écoute, standard http: 80, https: 443

const serveur = http.createServer((requete, reponse) => {
  console.log(
    `Le serveur a reçu une requête l'URL suivant: http://${hostname}:${port} requete: requete.url`
  );

  let fichier = "." + requete.url; //utilisation du répertoire courant
  if (fichier == "./") {
    fichier = "./index.html"; //si aucun fichier n'est demandé prendre index.html
  }
  let extension = String(path.extname(fichier)).toLowerCase(); //extrait l'extension du nom de fichier

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
          `Désolé, vérifier avec l'Administrateur du site pour l'erreur: ${erreur.code}..\n`
        );
      }
    } else {
      let typeMIME = MIMEType[extension] || "application/octet-stream"; //= traiterMIME(extension);
      reponse.statusCode = 200;
      reponse.setHeader("Content-Type", typeMIME);
      reponse.end(data);
    }
  });
});

//main
serveur.listen(port, hostname, () => {
  console.log(`Le serveur roule à l'URL suivant: http://${hostname}:${port}/`);
});
