var Noopath = require("./Noopath");

Noopath.setPath("/var/www/node/noopath");
Noopath.setIgnorePaths(["/var/www/node/noopath/nbproject/"])
Noopath.setIgnoreExtensions(["json"]);

Noopath.debug(false);


console.log("Noopath.load\t\t",Noopath.load("config"));
console.log("Noopath.loadOrElse\t",Noopath.loadOrElse("x.json","y.json","maker"));
console.log("Noopath.loadByFilter\t",Noopath.loadByFilter("config","modules"));
console.log("Noopath.loadFromFolder\t",Noopath.loadFromFolder("noopath","Misc"));


console.log("Noopath.getFromConfig\t",Noopath.getFromConfig("var.www.node.noopath.modules.maker"));
console.log("Noopath.getAll\t\t",Noopath.getAll("config"));
console.log("Noopath.getConfig\t",Noopath.getConfig());