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
Your HTML code must include the following import (you can also host the
`submodules.min.js` file yourself):

```html
<script src="https://cdn.subnodal.com/lib/submodules.min.js"></script>
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

## Want to use subModules easily on the web?
We suggest bundling your libraries with
[subPack](https://github.com/Subnodal/subPack). That way it's much easier for
others to import and use your subModules library. Instead of having to write
this:

```html
<script src="path/to/submodules.js"></script>
<script src="path/to/mymodule.js"></script>
<script src="path/to/somemoduleofmymodule.js"></script>
<script src="path/to/anothermymodulemodule.js"></script>
```

...They just need to import one file:

```html
<script src="path/to/mymodule.min.js"></script>
```

The bundled and minified file is much easier to import and much more portable,
and is very lightweight (so your pages load _much_ quicker). For most bundled
libraries (unless disabled) you don't even need to import `submodules.js` to use
a subModules-based library since `submodules.js` is automatically bundled too!