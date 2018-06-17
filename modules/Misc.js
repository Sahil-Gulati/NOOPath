/**
 * Sahil Gulati <sahilgulati@paisabazaar.com>
 */
class Misc {
    static isValidOOPPath(oop_string){
        var fragments = oop_string.split(".")
        var filtered_fragments = fragments.filter(function(fragment){
            if(fragment !== ""){
                return true;
            }
        })
        return fragments.length === filtered_fragments.length
    }
    static isEmptyObject(object){
        if(object.constructor === Object && Object.keys(object).length === 0){
            return true;
        }
        return false;
    }
    static isObject(object){
        if(object.constructor === Object){
            return true;
        }
        return false;
    }
    static getPathFromObject(configObject, noopath_string){
        if(Misc.isValidOOPPath(noopath_string)){
            var fragments = noopath_string.split(".")
            for(var key_index in fragments){
                var fragment = fragments[key_index];
                if(configObject[fragment]){
                    configObject = configObject[fragment]
                } else {
                    return false;
                }
            }
            return configObject;
        }
        return false;
    }
    /**
     * This function will return first encountered key,
     * which is not an object.
     */
    static getKeyFromObject(configObject, filename){
        if(filename in configObject && !Misc.isObject(configObject[filename])){
            return configObject[filename];
        } else {
            for (var key_filename in configObject) {
                if(Misc.isObject(configObject[key_filename])){
                    var result = Misc.getKeyFromObject(configObject[key_filename],filename)
                    if(result){ return result; }
                }
            }
            return false;
        }
    }
    /**
     * This function will return array of all key,
     * which encounters during recursive looping.
     */
    static getKeysFromObject(configObject, filename, keys){
        if(filename in configObject && !Misc.isObject(configObject[filename])){
            keys.push(configObject[filename]);
        } else {
            for (var key_filename in configObject) {
                if(Misc.isObject(configObject[key_filename])){
                    var keys = Misc.getKeysFromObject(configObject[key_filename],filename,keys);
                }
            }
        }
        return keys;
    }
    /**
     * This function will first value from the array,
     * matching with regex_expression.
     */
    static getFirstMatching(filenames, regex_string){
        for (var file_index in filenames) {
            var requiredFilname = filenames[file_index];
            var pattern = new RegExp(regex_string);
            if(requiredFilname.search(pattern)!== -1){
                return requiredFilname;
            }
        }
        return false;
    }
    static getFirstExistingKeyFromObject(object,files){
        for(var file_index in files){
            var filename = files[file_index]
            var filepath = Misc.getKeyFromObject(object,filename)
            if(filepath!= false){
                return filepath
            }
        }
        return false
    }
}
module.exports = Misc;