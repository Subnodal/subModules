/*
    subModules

    Copyright (C) Subnodal Technologies. All Rights Reserved.
    
    https://subnodal.com
    Licenced by the Subnodal Open-Source Licence, which can be found at LICENCE.md.
*/

(function(global) {
    if (global.SUBMODULES_VERSION) {
        return;
    }

    global.SUBMODULES_VERSION = "1.0.0";
    global.SUBMODULES_VERNUM = 0;

    global.namespaces = {};

    class Namespace {}
    class ExportsContainer {}

    function softCreateNamespace(identifier) {
        if (!(identifier in global.namespaces)) {
            global.namespaces[identifier] = new Namespace();
        }
    }

    global.require = function(identifier) {
        softCreateNamespace(identifier);

        return global.namespaces[identifier];
    };

    global.namespace = function(identifier, constructor) {
        softCreateNamespace(identifier);

        var exportsContainer = new ExportsContainer();

        constructor(exportsContainer);

        for (var exportsIdentifier in exportsContainer) {
            global.namespaces[identifier][exportsIdentifier] = exportsContainer[exportsIdentifier];
        }
    };
})(this);