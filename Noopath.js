/**
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
const Maker = require("./modules/maker");
const Config = require("./modules/config");
const Traverser = require("./modules/traverser");
const Misc = require("./modules/Misc");

class Noopath extends Config {
    constructor(){
        super();
        this.maker = new Maker(this);
        this.config = {}
        this.traverser = new Traverser(this);
    }
    __generateConfig(){
        this.traverser.__traverser(this.path);
        this.maker.setPaths(
            this.traverser.list
        );
        this.config = this.maker.make();
    }
    __getConfig(){
        if(Misc.isEmptyObject(this.config)){
            this.__generateConfig();
        }
        return this.config;
    }
    getConfig(){
        return this.__getConfig();
    }
    getFromConfig(oop_string){
        var config = this.__getConfig();
        return Misc.getPathFromObject(config,oop_string)
    }
}
module.exports = new Noopath;