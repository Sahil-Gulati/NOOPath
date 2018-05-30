var Noopath = require("./Noopath")
Noopath.setPath("/var/www/node/noopath")
Noopath.setIgnorePaths(["/var/www/node/noopath/nbproject/"])
Noopath.setIgnoreExtensions(["json"])
console.log(Noopath.getConfig().var.www.node.noopath.modules.FileMisc)
console.log(Noopath.getFromConfig("var.www.node"))
console.log(Noopath.load("index"));
console.log(Noopath.loadByFilter("config","git\/config$"));
console.log(Noopath.getAll("config"));