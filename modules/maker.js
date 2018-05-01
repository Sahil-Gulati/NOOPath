/**
 * This file will handle maker of resolved file structure object
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
class Maker {
    constructor(caller_context){
        this.paths = [];
        this.caller_context = caller_context;
    }
    setPaths(paths){
        for(var path_index in paths){
            this.paths.push(paths[path_index]);
        }
    }
    make(){
        var result = {}
        for(var path_index in this.paths){
            var path = this.paths[path_index];
            var array = path.split("/");
            array.shift()
            result = this.resolve(result,array,array.length -1 ,0)
        }
        return result;
    }
    resolve(result,array, count,counter){
        var current = array[counter]
        if(count === counter){
            current = this.caller_context.removeFileExtension(current,this.caller_context.ignoreExtensions)
            result[current] = "/" + array.join("/");
            return result;
        } else {
            if(result[current]){
               result[current] = this.resolve(result[current],array,count,counter+1) 
               return result;
            } else {
                result[current] = this.resolve({},array,count,counter+1) 
               return result;
            }
        }
    }
}
module.exports = Maker;