# NOOPath
A node library which takes filepath and convert its filesystem into an object, So you can access paths with dot.separated.structure . This library will take away the pain of writing paths as string, by replacing it will dot separated notation like `noopath.var.www.path.to.project`.


## Installation
`npm install noopath`


## Usage
```javascript
const noopath = require('noopath');

//[REQUIRED]
noopath.setPath("/var/www/noopath") //set path to folder

//[OPTIONAL]
noopath.setIgnorePath([
                    "/var/www/noopath/node_modules/",
                    "/var/www/noopath/.git"
                    ]); //setting the path which you want to ignore in creation of object
noopath.setIgnoreExtensions(["json"]) //Adds `json` to ignore extensions, `js` is already there.

const config = noopath.getConfig() //get file-structure in an object
console.log(config)
```

### Directory structure
```
|- var
    |- www
        |- noopath
            |- test.js
            |- folder
                  |- calculation.js
                  |- manager.js
                  |- something.js
                  |- another_folder
                            |- x.json
                            |- y.json
            |- package.json
            |- package-lock.json
            |- node_modules
                  |- ...
            |- .git
                  |- ...
            
```
## Output

```javascipt
{
  var: {
    www: {
      noopath: {
        test: "/var/www/noopath/test.js",
        package: "/var/www/noopath/package.json",
        package-lock: "/var/www/noopath/package-lock.json",
        folder: {
            calculation: "/var/www/noopath/folder/calculation.js",
            manager: "/var/www/noopath/folder/manager.js",
            something: "/var/www/noopath/folder/something.js",
            another_folder: {
                x: "/var/www/noopath/folder/another_folder/x.json",
                y: "/var/www/noopath/folder/another_folder/y.json"
            }
        }
      }
    }
  }
}
```
