require("./base");

require("./initial/long");
require("./initial/long_test");

console.log("Testing initial goog.math.long.js ...");
Object.keys(goog.global).forEach(function(key) {
  if (typeof goog.global[key] === "function") {
    console.log("Running '" + key + "' ...");
    goog.global[key]();
  }
});
goog.global = {};

require("./recent/long");
require("./recent/long_test");

console.log("\nTesting (more) recent goog.math.long.js ...");
Object.keys(goog.global).forEach(function(key) {
  if (typeof goog.global[key] === "function") {
    console.log("Running '" + key + "' ...");
    goog.global[key]();
  }
});
