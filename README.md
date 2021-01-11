# subModules
Module and namespace management library for writing modular JavaScript code.

Licenced by the [Subnodal Open-Source Licence](LICENCE.md).

## Building
Prerequisites:
* Python 3
* Node.js
* terser (`sudo npm install -g terser`)

To build subModules, run the `build.py` file. Once building is complete, the
minified version of subModules will be in the `build/` direcory.

## Using subModules
See
[the example directory](https://github.com/Subnodal/subModules/tree/main/example)
for a basic example of how to use subModules.

You can get a minified copy of subModules on the [releases page](https://github.com/Subnodal/subModules/releases).

### Importing subModules and your scripts
Your HTML code must include the following import:

```html
<script src="path/to/submodules.js"></script>
```

That way, subModules can then be used in your JS code. Ensure that your JS code
is imported **after** importing subModules.

Once your JS code for defining namespaces has been imported (they can be
imported in any order and can even have circular dependencies), import your main
code for initialising your project **after** importing your namespaced code.

### Writing namespaces
Namespaces are written like this:

```js
// The namespace identifier is defined in reverse domain name notation
namespace("com.example.namespaceid", function(exports) {
    // This variable will be kept private to this namespace
    var scopedVariable = "This won't be exposed";

    // This variable will be public, and can be read or written to from other
    // namespaces
    exports.featureA = "Hello, world!";

    // Defining functions is pretty easy
    // Functions can also be kept private by not defining them as an export
    exports.featureB = function(radius) {
        return Math.PI * Math.pow(radius, 2);
    };

    // Here's an example of using functionality from another namespace
    // The object returned from `require` can also be stored in a variable for
    // frequent use
    exports.featureC = function() {
        return require("com.example.magicpowers").doMagic(42);
    };
});
```

You can then use `require` to use namespaces in non-namespaced areas, such as in
your main code (so long as the main code is run after the namespaces have been
initialised).