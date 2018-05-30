/**
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
const Maker = require("./modules/maker");
const Config = require("./modules/config");
const Traverser = require("./modules/Traverser");
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
    load(filename){
        var config = this.__getConfig();
        return Misc.getKeyFromObject(config,filename);
    }
    loadByFilter(filename,filter_expression){
        var filenames = this.getAll(filename);
        for (var file_index in filenames) {
            var requiredFilname = filenames[file_index];
            var pattern = new RegExp(filter_expression);
            if(requiredFilname.search(pattern)!== -1){
                return requiredFilname;
            }
        }
        return false;
    }
    getAll(filename){
        var config = this.__getConfig();
        return Misc.getKeysFromObject(config,filename,[]);
    }
}
module.exports = new Noopath;