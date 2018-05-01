/**
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
const Maker = require("./modules/maker");
const Config = require("./modules/config");
const Traverser = require("./modules/traverser.js");

class Noopath extends Config {
    constructor(){
        super();
        this.maker = new Maker(this);
        this.config = {}
        this.traverser = new Traverser(this);
    }
    getConfig(){
        this.traverser.__traverser(this.path);
        this.maker.setPaths(
            this.traverser.list
        );
        this.config = this.maker.make();
        return this.config;
    }   
}
module.exports = new Noopath;