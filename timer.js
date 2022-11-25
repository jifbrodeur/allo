/*setTimeout(() => {
  // s'exécute après 2 secondes
  console.log("le délai est écoulé");
}, 2000);*/

function messageDelai(message) {
  console.log(message);
}

//setTimeout(messageDelai("Délai écoulé de 2 secondes"), 2000);



messageDelai("Allo les amis");
setTimeout(messageDelai("Allo les amis"), 2000);
