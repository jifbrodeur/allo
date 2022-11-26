const MIMEType = require("./MIMEType.js"); //module qui export un objet des extension et MIME Type
let extension = ".html";

console.log(`extension ${extension}`);
console.log(MIMEType[extension]);
