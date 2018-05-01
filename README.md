# NOOPath
A node library which takes filepath and convert its filesystem in an object, So you can access paths with dot.separated.structure .


## Installation
`npm install noopath`


## Usage
```javascript
const noopath = require('noopath');

//[REQUIRED]
noopath.setPath("/var/www/noopath") //set path to folder

//[OPTIONAL]
noopath.setIgnorePath(["/var/www/noopath/node_modules/"]); //setting the path which you want to ignore
noopath.ignoreExtensions(["json"]) //Adds `json` to ignore extensions, `js` is already there.

const config = noopath.getConfig() //get file-structure in an object
console.log(config)
```

### Directory structure
```
|- var
    |- www
        |- noopath
            |- test.js
            |- package.json
            |- package-lock.json
            |- node_modules
                  |- ...
            
```
## Output

```javascipt
{
  var: {
    www: {
      noopath: {
        test: "/var/www/noopath/test.js"
      }
    }
  }
}
```
