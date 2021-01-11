namespace("com.subnodal.example.a", function(exports) {
    var exampleB = require("com.subnodal.example.b");

    exports.testB = function() {
        return exampleB.test();
    };
});