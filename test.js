var Noopath = require("./Noopath");
Noopath.setPath("/var/www/node/noopath");
Noopath.setIgnorePaths(["/var/www/node/noopath/nbproject/"])
Noopath.setIgnoreExtensions(["json"]);
Noopath.debug(true);
Noopath.load("index");
Noopath.load("config");
Noopath.load("maker");
Noopath.getFromConfig("var.www.node.noopath.modules.maker");
Noopath.loadByFilter("config","modules");
