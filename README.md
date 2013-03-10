Long
====
A Long class for representing a 64-bit two's-complement integer value derived from the [Closure Library](https://code.google.com/p/closure-library/)
for stand-alone use.

Features
--------
* [CommonJS](http://www.commonjs.org/) compatible
* [RequireJS](http://requirejs.org/)/AMD compatible
* Shim compatible (include the script, then use var ByteBuffer = dcodeIO.ByteBuffer;)
* [node.js](http://nodejs.org) compatible, also available via [npm](https://npmjs.org/package/long)
* Fully documented using [jsdoc3](https://github.com/jsdoc3/jsdoc)
* Zero production dependencies
* Small footprint

Usage
-----

#### node.js / CommonJS ####

Install: `npm install long`

```javascript
var Long = require("Long");
var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
console.log(longVal.toString());
...
```

#### RequireJS / AMD ####

````javascript
require(["path/to/Long.js"], function(Long) {
    var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
    console.log(longVal.toString());
});
````

### Browser / shim ####

```html
<script src="//raw.github.com/dcodeIO/Long.js/master/Long.min.js"></script>
```

```javascript
var Long = dcodeIO.Long;
var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
alert(longVal.toString());
```

Documentation
-------------
* [View documentation](http://htmlpreview.github.com/?http://github.com/dcodeIO/Long.js/master/docs/Long.html)

Downloads
---------
* [ZIP-Archive](https://github.com/dcodeIO/Long.js/archive/master.zip)
* [Tarball](https://github.com/dcodeIO/Long.js/tarball/master)

License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0.html
