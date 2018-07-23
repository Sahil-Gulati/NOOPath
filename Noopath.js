/**
 * This class will serve as a main interface to the client.
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
const Misc = require("./modules/Misc");
const Maker = require("./modules/maker");
const Config = require("./modules/config");
const Holder = require("./modules/Holder");
const Traverser = require("./modules/Traverser");

class Noopath extends Config {
    constructor(){
        super();
        this.maker = new Maker(this);
        this.holder = Holder;
        this.traverser = new Traverser(this);
        this.log = false;
    }
    __generateConfig(){
        this.traverser.__traverser(this.path);
        this.maker.setPaths(
            this.traverser.list
        );
        this.holder.push("config", this.maker.make());
    }
    __getConfig(){
        if(Misc.isEmptyObject(this.holder.safeGet("config"))){
            this.__generateConfig();
        }
        return this.holder.safeGet("config");
    }
    getConfig(){
        return this.__getConfig();
    }
    getFromConfig(oop_string){
        var config = this.__getConfig();
        return Misc.getPathFromObject(config,oop_string);
    }
    load(filename){
        var config = this.__getConfig();
        return Misc.getKeyFromObject(config,filename);
    }
    loadByFilter(filename,filter_expression){
        var filenames = this.getAll(filename);
        return Misc.getFirstMatching(filenames, filter_expression, filename);
    }
    loadOrElse(...filenames){
    	var config = this.__getConfig();
    	return Misc.getFirstExistingKeyFromObject(config, filenames);
    }
    loadFromFolder(folder, filename){
        var config = this.__getConfig();
        return Misc.getKeyFromObject( 
            Misc.getKeyFromObject(config,folder,true) || {},
            filename
        );
    }
    getAll(filename){
        var config = this.__getConfig();
        return Misc.getKeysFromObject(config,filename,[]);
    }
    debug(debug){
        Misc.log = debug;
    }
    clear(){
        Holder.clear();
    }

}
module.exports = new Noopath;
