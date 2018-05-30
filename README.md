# NOOPath
NOOPath is Node Object Oriented Path. A node library which takes filepath and convert its filesystem into an object, So you can access paths with dot.separated.structure . This library will take away the pain of writing paths as string, by replacing it will dot separated notation like `noopath.var.www.path.to.project`. This library also offers an interesting dynamic loading of files with its filename.


## Installation
`npm install noopath`


## Usage

```javascript
const noopath = require('noopath');

/**
 *[REQUIRED]
 */
noopath.setPath("/var/www/noopath") //set path to folder


/**
 *[OPTIONAL]
 */
noopath.setIgnorePaths([
                    "/var/www/noopath/node_modules/",
                    "/var/www/noopath/.git"
                    ]); //setting the path which you want to ignore in creation of object
noopath.setIgnoreExtensions(["json"]) //Adds `json` to ignore extensions, `js` is already there.

const config = noopath.getConfig() //get file-structure in an object
console.log(config)
console.log(config.var.www.noopath.test) //var/www/noopath/test.js
console.log(config.var.www.noopath.folder.calculation) //var/www/noopath/folder/calculation.js

var filepath = noopath.getFromConfig("var.www.noopath.folder.calculation")
console.log(filepath) //var/www/noopath/folder/calculation.js

console.log(noopath.load("x")) // /var/www/noopath/folder/another_folder/x.json

/**
 * It will first get all keys with name config and filter out the required one.
 * Filter out between two files /var/www/noopath/folder/another_folder/config.json,  /var/www/noopath/config.js
 */
console.log(noopath.loadByFilter("config", "config\.json$")) // /var/www/noopath/folder/another_folder/config.json

/**
 * It will return all files gathered for filtering out.
 */
console.log(noopath.getAll("config")) // ["/var/www/noopath/folder/another_folder/config.json",  "/var/www/noopath/config.js"]
```

## Directory structure:

```php
|- var
    |- www
        |- noopath
            |- test.js
            |- config.js
            |- folder
                  |- calculation.js
                  |- manager.js
                  |- something.js
                  |- another_folder
                            |- x.json
                            |- y.json
                            |- config.json
            |- package.json
            |- package-lock.json
            |- node_modules
                  |- ...
            |- .git
                  |- ...
            
```
## Output:

```console.log(config)```
```javascript
{
  var: {
    www: {
      noopath: {
        test: "/var/www/noopath/test.js",
        config: "/var/www/noopath/config.js",
        package: "/var/www/noopath/package.json",
        package-lock: "/var/www/noopath/package-lock.json",
        folder: {
            calculation: "/var/www/noopath/folder/calculation.js",
            manager: "/var/www/noopath/folder/manager.js",
            something: "/var/www/noopath/folder/something.js",
            another_folder: {
                x: "/var/www/noopath/folder/another_folder/x.json",
                y: "/var/www/noopath/folder/another_folder/y.json",
                config: "/var/www/noopath/folder/another_folder/config.json",
            }
        }
      }
    }
  }
}
```
## Documentation

#### Noopath.setPath(path)
```
This function will accept path as string. make sure this should be absolute path.
```

#### Noopath.setIgnorePaths(paths[])
```
This function will accept array of paths where each path should be absolute path(String). This function will add paths which you want to ignore while the creation of config object. This can be either directory or file. Note: Less paths less memory space.
```

#### Noopath.setIgnoreExtensions(extension[])
```
This function will accept array of strings where each string should contain extension. Note: It should not contain `.` Use `extension` not `.extension`. This function will not allow module to add extensions to keys of config object.
```

#### Noopath.getFromConfig(string)
```
This function will accept object oriented string path and return Object/String of path(s) on the basis of string used as input to the function.
```

#### Noopath.getConfig()
```
This function will return file system in the form of an object.
```

#### Noopath.load(filename)
```
This function will return complete filepath by digging inside complete config object. Input parameter filename should be an existing key, else it give false. Note: In case on multiple keys, It will return first encountered key within the object. It will work perfectly like a loader in case of unique filename.
```
#### Noopath.loadByFilter(filename, filter_regex_string)
```
This function will return complete filepath by digging inside complete config object, but difference here is, It will gather all files with that name and return first matched filepath.
```

#### Noopath.getAll(filename)
```
It will return all filepaths by filename which can be gathered during filtering out.
```
