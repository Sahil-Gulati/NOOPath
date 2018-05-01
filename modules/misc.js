/**
 * This class will contain some most used
 * common functions related to file system
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
const global = require("./global.require.js");
const fs = global.fs;
class Misc 
{
    isDirectory(filepath){
        if(fs.statSync(filepath).isDirectory()){
            return true;
        } else {
            return false;
        }
    }
    isFile(filepath){
        if(this.isDirectory(filepath)){
            return false;
        } else {
            return true;
        }
    }
    exists(filepath){
        return fs.existsSync(filepath) ? true : false;
    }
    getContents(filepath){
        if(this.isDirectory(filepath)){
            return fs.readdirSync(filepath)
        } else {
            return [];
        }
    }
    removeFileExtension(filename,list_of_extensions){
        for(var ex_index in list_of_extensions){
            var extension = "." +list_of_extensions[ex_index];
            var extension_index = filename.indexOf(extension)
            var extension_length = extension.length;
            if(extension_index === (filename.length - extension_length)){
                var pattern = new RegExp(extension+"$");
                return filename.replace(pattern,"")
            }
        }
        return filename;
    }
}
module.exports = Misc