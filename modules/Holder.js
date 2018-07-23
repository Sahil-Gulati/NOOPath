/**
 * This class will serve as a data holder which works on singleton concept.
 * Sahil Gulati <sahilgulati@paisabazaar.com>
 */
class Holder {
    static push(key, property){
        this[key] = property;
    }
    static safeGet(key){
        if(typeof this[key] !== "undefined"){
            return this[key];
        } else {
            return {};
        }
    }
    static clear(){
        var keys = Object.keys(this);
        for(var i in keys){
            var key = keys[i];
            delete this[key];
        }
    }
};
module.exports = Holder;