// Closure Library compatibility layer

if (typeof global === "undefined") global = window;

var goog = global.goog = {};

goog.require = function(pkg) {};

goog.setTestOnly = function() {};

goog.provide = function(pkg) {
  var parts = pkg.split('.');
  var current = global;
  while (parts.length) {
    var part = parts.shift();
    current = current[part] || (current[part] = {});
  }
};

// Environment required to test both old and new versions of goog.math.long.js

goog.provide("goog.global");

goog.provide("goog.asserts");

var assert = require("assert");
goog.asserts.assert = function(condition, opt_message, var_args) {
  assert(condition, opt_message, Array.prototype.slice.call(arguments, 2));
};

global.assertEquals = function(expected, actual) { goog.asserts.assert(expected === actual); }

global.assertTrue = function(value) { goog.asserts.assert(value === true); }

global.assertNotNull = function(value) { goog.asserts.assert(value !== null); }

goog.provide("goog.reflect");

goog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {
  var storedKey = opt_keyFn ? opt_keyFn(key) : key;
  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {
    return cacheObj[storedKey];
  }
  return (cacheObj[storedKey] = valueFn(key));
};
