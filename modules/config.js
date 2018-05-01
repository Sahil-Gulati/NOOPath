/**
 * This file will handle config relate setters
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
const Misc = require("./misc")
class Config extends Misc {
    constructor(){
        super()
        this.path = "";
        this.ignorePaths = [];
        this.ignoreExtensions = ["js"];
    }
    setPath(path){
        this.path = path;
    }
    setIgnorePaths(paths){
        for(var path_index in paths){
            var path = paths[path_index];
            if(this.isDirectory(path)){
               var pattern = new RegExp("/{1,}$");
               path = path.replace(pattern,"")
               this.ignorePaths.push(path) 
            }
        }
    }
    setIgnoreExtensions(array){
        for(var extension_index in array){
            this.ignoreExtensions.push(array[extension_index])
        }
    }
    isIgnorable(path){
        if(this.ignorePaths.indexOf(path)!== -1){
            return true;
        } else {
            return false;
        }
    }
}
module.exports = Config