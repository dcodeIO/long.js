![Long.js - A Long class for representing a 64 bit two's-complement integer ](https://raw.github.com/dcodeIO/Long.js/master/long.png)
=======
A Long class for representing a 64 bit two's-complement integer value derived from the [Closure Library](https://code.google.com/p/closure-library/)
for stand-alone use and extended with unsigned support.

[![Build Status](https://travis-ci.org/dcodeIO/Long.js.svg)](https://travis-ci.org/dcodeIO/Long.js)
[![Donate](https://raw.githubusercontent.com/dcodeIO/Long.js/master/donate.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info%40code-emitter.com&item_name=Open%20Source%3A%20Long.js)

Why?
----
As of the [ECMAScript specification](http://ecma262-5.com/ELS5_HTML.htm#Section_8.5), number types have a maximum safe
value of 2^53-1 ([see also](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)).
Beyond that, behaviour might be unexpected. Furthermore, bitwise operations can only be performed on 32 bit numbers.
However, in some use cases it is required to be able to perform reliable mathematical and/or bitwise operations
on the full 64 bits. This is where Long.js comes into play.

Usage
-----
The class is compatible with CommonJS and AMD loaders and is exposed globally as `dcodeIO.Long` if neither is available.

```javascript
var Long = require("long");

var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
console.log(longVal.toString());
...
```

Documentation
-------------
* [View the API documentation](http://htmlpreview.github.io/?https://raw.githubusercontent.com/dcodeIO/Long.js/master/docs/Long.html)

Downloads
---------
* [Distributions](https://github.com/dcodeIO/Long.js/tree/master/dist)
* [ZIP-Archive](https://github.com/dcodeIO/Long.js/archive/master.zip)
* [Tarball](https://github.com/dcodeIO/Long.js/tarball/master)

License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0.html
