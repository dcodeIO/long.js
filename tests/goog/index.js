require("./base");

function runTests() {
  Object.keys(goog.global).forEach(function(key) {
    if (/^test/.test(key) && typeof goog.global[key] === "function") {
      console.log("- " + key);
      var fn = goog.global[key];
      delete goog.global[key];
      try {
        fn();
      } catch (e) {
        console.log("\nERROR: " + e + "\n");
        process.exitCode = 1;
      }
    }
  });
}

require("./initial/long");
require("./initial/long_test");

console.log("Testing initial goog.math.long.js ...");
runTests();

require("./recent/long");
require("./recent/long_test");

console.log("\nTesting (more) recent goog.math.long.js ...");
runTests();
