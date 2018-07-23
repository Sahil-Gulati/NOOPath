/**
 * This class will give miscellaneous functions to work with.
 * Sahil Gulati <sahilgulati@paisabazaar.com>
 */
class Misc {
    /**
     * This function will check wether a oop_string(Eg. var.www.x.y) is valid or not.
     * @param {String} oop_string
     * @return {Boolean}
     */
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
            var fragments = noopath_string.split(".");
            for(var key_index in fragments){
                var fragment = fragments[key_index];
                if(configObject[fragment]){
                    configObject = configObject[fragment]
                } else {
                    return false;
                }
            }
            Misc.console(
                ["OOP_String", noopath_string],
                ["Filepath",configObject]
            );
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
            Misc.console(
                ['Filename', filename], 
                ['Filepath', configObject[filename]]
            );
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
    static getFirstMatching(array, regex_string){
        for (var i in array) {
            var requiredFilname = array[i];
            var pattern = new RegExp(regex_string);
            if(requiredFilname.search(pattern)!== -1){
                var filename = requiredFilname
                        .split("/").pop() /** Last Element **/
                        .split(".").shift() /** First Element **/
                Misc.console( 
                    ["Filename",filename],
                    ["Regex",regex_string],
                    ["Filepath",requiredFilname]
                );
                return requiredFilname;
            }
        }
    }
    static console(...logs){
        if(Misc.log){
            logs = logs.map(function(log_array){
                return log_array.join(": '");
            });
            console.log(logs.join("' | ")+"'");
        }
    }
}
module.exports = Misc;