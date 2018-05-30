/**
 * This class will handle traverser path for gathering files
 * and skipping ignorable folders
 * Sahil Gulati<sahil.gulati1991@outlook.com>
 */
class Traverser {
    constructor(caller_context){
        this.list = []
        this.caller_context = caller_context;
    }
    __traverser(filepath){
        if(this.caller_context.isDirectory(filepath)){
           this.__traverse(filepath,this.caller_context.getContents(filepath))
       }
    }
    __traverse(filepath, folders){
        if(this.caller_context.isIgnorable(filepath)){
            return true;
        }
        for(var folderIndex in folders){
            var folderName =  folders[folderIndex];
            if(!this.caller_context.isDirectory(filepath+"/"+folderName)){
                if(!this.caller_context.isIgnorable(filepath+"/"+folderName)){
                    this.list.push(filepath+"/"+folderName);
                }
            } else {
                this.__traverser(filepath+"/"+folderName);
            }
        }
    } 
}
module.exports = Traverser;