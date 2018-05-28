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
    static getPathFromObject(configObject, noopath_string){
        if(Misc.isValidOOPPath(noopath_string)){
            var fragments = noopath_string.split(".")
            for(var key_index in fragments){
                var fragment = fragments[key_index];
                if(configObject[fragment]){
                    configObject = configObject[fragment]
                } else {
                    return false
                }
            }
            return configObject
        }
        return false;
    }
}
module.exports = Misc