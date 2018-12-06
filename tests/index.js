var assert = require("assert");
var Long = require("..");

var tests = [ // BEGIN TEST CASES

function testBasic() {
    var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
    assert.strictEqual(longVal.toNumber(), 9223372036854775807);
    assert.strictEqual(longVal.toString(), "9223372036854775807");

    var longVal2 = Long.fromValue(longVal);
    assert.strictEqual(longVal2.toNumber(), 9223372036854775807);
    assert.strictEqual(longVal2.toString(), "9223372036854775807");
    assert.strictEqual(longVal2.unsigned, longVal.unsigned);
},

function testIsLong() {
    var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
    assert.strictEqual(Long.isLong(longVal), true);
    longVal = {"__isLong__": true};
    assert.strictEqual(Long.isLong(longVal), true);
},

function testToString() {
    var longVal = Long.fromBits(0xFFFFFFFF, 0xFFFFFFFF, true);
    // #10
    assert.strictEqual(longVal.toString(16), "ffffffffffffffff");
    assert.strictEqual(longVal.toString(10), "18446744073709551615");
    assert.strictEqual(longVal.toString(8), "1777777777777777777777");
    // #7, obviously wrong in goog.math.Long
    assert.strictEqual(Long.fromString("zzzzzz", 36).toString(36), "zzzzzz");
    assert.strictEqual(Long.fromString("-zzzzzz", 36).toString(36), "-zzzzzz");
},

function testToBytes() {
    var longVal = Long.fromBits(0x01234567, 0x12345678);
    assert.deepEqual(longVal.toBytesBE(), [
        0x12, 0x34, 0x56, 0x78,
        0x01, 0x23, 0x45, 0x67
    ]);
    assert.deepEqual(longVal.toBytesLE(), [
        0x67, 0x45, 0x23, 0x01,
        0x78, 0x56, 0x34, 0x12
    ]);
},

function testFromBytes() {
    var longVal = Long.fromBits(0x01234567, 0x12345678);
    var ulongVal = Long.fromBits(0x01234567, 0x12345678, true);
    assert.deepEqual(Long.fromBytes(longVal.toBytes()), longVal);
    assert.deepEqual(Long.fromBytes([0x12, 0x34, 0x56, 0x78, 0x01, 0x23, 0x45, 0x67]), longVal);
    assert.deepEqual(Long.fromBytes([0x12, 0x34, 0x56, 0x78, 0x01, 0x23, 0x45, 0x67], false, false), longVal);
    assert.deepEqual(Long.fromBytes([0x67, 0x45, 0x23, 0x01, 0x78, 0x56, 0x34, 0x12], false, true), longVal);
    assert.deepEqual(Long.fromBytes([0x67, 0x45, 0x23, 0x01, 0x78, 0x56, 0x34, 0x12], true, true), ulongVal);
},

function testUnsignedMinMax() {
    assert.strictEqual(Long.MIN_VALUE.toString(), "-9223372036854775808");
    assert.strictEqual(Long.MAX_VALUE.toString(), "9223372036854775807");
    assert.strictEqual(Long.MAX_UNSIGNED_VALUE.toString(), "18446744073709551615");
},

function testUnsignedConstructNegint() {
    var longVal = Long.fromInt(-1, true);
    assert.strictEqual(longVal.low, -1);
    assert.strictEqual(longVal.high, -1);
    assert.strictEqual(longVal.unsigned, true);
    assert.strictEqual(longVal.toNumber(), 18446744073709551615);
    assert.strictEqual(longVal.toString(), "18446744073709551615");
},

function testUnsignedConstructHighLow() {
    var longVal = new Long(0xFFFFFFFF, 0xFFFFFFFF, true);
    assert.strictEqual(longVal.low, -1);
    assert.strictEqual(longVal.high, -1);
    assert.strictEqual(longVal.unsigned, true);
    assert.strictEqual(longVal.toNumber(), 18446744073709551615);
    assert.strictEqual(longVal.toString(), "18446744073709551615");
},

function testUnsignedConstructNumber() {
    var longVal = Long.fromNumber(0xFFFFFFFFFFFFFFFF, true);
    assert.strictEqual(longVal.low, -1);
    assert.strictEqual(longVal.high, -1);
    assert.strictEqual(longVal.unsigned, true);
    assert.strictEqual(longVal.toNumber(), 18446744073709551615);
    assert.strictEqual(longVal.toString(), "18446744073709551615");
},

function testUnsignedToSignedUnsigned() {
    var longVal = Long.fromNumber(-1, false);
    assert.strictEqual(longVal.toNumber(), -1);
    longVal = longVal.toUnsigned();
    assert.strictEqual(longVal.toNumber(), 0xFFFFFFFFFFFFFFFF);
    assert.strictEqual(longVal.toString(16), 'ffffffffffffffff');
    longVal = longVal.toSigned();
    assert.strictEqual(longVal.toNumber(), -1);
},

function testUnsignedMaxSubMaxSigned() {
    var longVal = Long.MAX_UNSIGNED_VALUE.subtract(Long.MAX_VALUE).subtract(Long.ONE);
    assert.strictEqual(longVal.toNumber(), Long.MAX_VALUE.toNumber());
    assert.strictEqual(longVal.toString(), Long.MAX_VALUE.toString());
},

function testUnsignedMaxSubMax() {
    var longVal = Long.MAX_UNSIGNED_VALUE.subtract(Long.MAX_UNSIGNED_VALUE);
    assert.strictEqual(longVal.low, 0);
    assert.strictEqual(longVal.high, 0);
    assert.strictEqual(longVal.unsigned, true);
    assert.strictEqual(longVal.toNumber(), 0);
    assert.strictEqual(longVal.toString(), "0");
},

function testUnsignedZeroSubSigned() {
    var longVal = Long.fromInt(0, true).add(Long.fromInt(-1, false));
    assert.strictEqual(longVal.low, -1);
    assert.strictEqual(longVal.high, -1);
    assert.strictEqual(longVal.unsigned, true);
    assert.strictEqual(longVal.toNumber(), 18446744073709551615);
    assert.strictEqual(longVal.toString(), "18446744073709551615");
},

function testUnsignedMaxDivMaxSigned() {
    var longVal = Long.MAX_UNSIGNED_VALUE.div(Long.MAX_VALUE);
    assert.strictEqual(longVal.toNumber(), 2);
    assert.strictEqual(longVal.toString(), "2");
},

function testUnsignedDivMaxUnsigned() {
    var longVal = Long.MAX_UNSIGNED_VALUE;
    assert.strictEqual(longVal.div(longVal).toString(), '1');
},

function testUnsignedDivNegSigned() {
    var a = Long.MAX_UNSIGNED_VALUE;
    var b = Long.fromInt(-2);
    assert.strictEqual(b.toUnsigned().toString(), Long.MAX_UNSIGNED_VALUE.sub(1).toString());
    var longVal = a.div(b);
    assert.strictEqual(longVal.toString(), '1');
},

function testUnsignedMinSignedDivOne() {
    var longVal = Long.MIN_VALUE.div(Long.ONE);
    assert.strictEqual(longVal.toString(), Long.MIN_VALUE.toString());
},

function testUnsignedMsbUnsigned() {
    var longVal = Long.UONE.shiftLeft(63);
    assert.strictEqual(longVal.notEquals(Long.MIN_VALUE), true);
    assert.strictEqual(longVal.toString(), "9223372036854775808");
    assert.strictEqual(Long.fromString("9223372036854775808", true).toString(), "9223372036854775808");
},

function testPower() {
    var a = Long.fromNumber(11);
    var b = a.power(12);
    var res = Long.fromNumber(3138428376721);
    var err;
    assert.deepEqual(b, res);
    // check negative, which will probably always be zero since we can't store fractional result?
    b = a.power(-3);
    assert.deepEqual(b, Long.ZERO);
    // except perhaps one which has a short circuit condition anyway?
    b = Long.ONE.power(-1);
    assert.deepEqual(b, Long.ONE);
    b = Long.UONE.power(-1);
    //if (!b.eq(Long.ONE)) throw new Error('Power failed to compute UONE to -1');
    assert.deepEqual(b, Long.UONE);
    // negative number
    a = Long.fromNumber(-11);
    b = a.power(11);
    res = Long.fromNumber(-285311670611);
    assert.deepEqual(b, res);
    // check as unsigned
    a = Long.fromNumber(11, true);
    b = a.power(12);
    res = Long.fromNumber(3138428376721, true);
    assert.deepEqual(b, res);
    // zero base
    b = Long.ZERO.power(123);
    assert.deepEqual(b, Long.ZERO);
    // one base
    b = Long.ONE.power(123);
    assert.deepEqual(b, Long.ONE);
    // zero power
    a = Long.fromNumber(123);
    b = a.power(Long.ZERO);
    assert.deepEqual(b, Long.ONE);
    // one power
    b = a.power(Long.ONE);
    assert.deepEqual(b, a);
    // zero to zero power
    b = Long.ZERO.power(Long.ZERO);
    assert.deepEqual(b, Long.ONE);
    // zero to negative power
    err = null;
    try { b = Long.ZERO.power(-3); }
    catch (e) { err = e; }
    if (err==null) throw new Error('Zero to negative power should throw error');
    // overflow edge case - 8 is max base for a power of 20
    a = Long.fromNumber(8);
    b = a.power(20);
    assert.deepEqual(b, Long.fromString('1152921504606846976'));
    // overflow edge case - -8 is max base for a power of 20
    a = Long.fromNumber(-8);
    b = a.power(20);
    assert.deepEqual(b, Long.fromString('1152921504606846976'));
    // overflow negative edge case
    a = Long.fromNumber(-2097152);
    b = a.power(3);
    assert.deepEqual(b, Long.MIN_VALUE);
    // overflow negative edge case
    a = Long.fromNumber(-2);
    b = a.power(63);
    assert.deepEqual(b, Long.MIN_VALUE);
    // overflow error - 64bit bound
    err = null;
    a = Long.fromNumber(2, true);
    try { b = a.power(Long.fromNumber(64)); }
    catch (e) { err = e; }
    if (err==null) throw new Error('2 ** 64 should throw overflow error (as max is 2**64-1)');
    // overflow error - arbitrary number
    err = null;
    a = Long.fromNumber(33);
    try { b = a.power(Long.fromNumber(19)); }
    catch (e) { err = e; }
    if (err==null) throw new Error('33 ** 19 should throw overflow error');
    // overflow error negative case
    err = null;
    a = Long.fromNumber(-2097153);
    try { b = a.power(3); }
    catch (e) { err = e; }
    if (err==null) throw new Error('-2097153 ** 3 should throw overflow error');
    // overflow error negative case with even power
    err = null;
    a = Long.fromNumber(-2097153);
    try { b = a.power(4); }
    catch (e) { err = e; }
    if (err==null) throw new Error('-2097153 ** 4 should throw overflow error');
    // error on float power
    err = null;
    a = Long.fromNumber(2);
    try { b = a.power(4.5); }
    catch (e) { err = e; }
    if (err==null) throw new Error('2 ** 4.5 should throw error');
},

function testIssue31() {
    var a = new Long(0, 8, true);
    var b = Long.fromNumber(2656901066, true);
    assert.strictEqual(a.unsigned, true);
    assert.strictEqual(b.unsigned, true);
    var x = a.div(b);
    assert.strictEqual(x.toString(), '12');
    assert.strictEqual(x.unsigned, true);
},

function testRotateLeft() {
    var longVal = Long.fromBits(0x01234567, 0x89ABCDEF);
    var longValL = Long.fromBits(0x12345678, 0x9ABCDEF0);
    var longValR = Long.fromBits(0xF0123456, 0x789ABCDE);
    var longValS = Long.fromBits(0x89ABCDEF, 0x01234567);
    // little rotate
    var v = longVal.rotateLeft(4);
    assert.deepEqual(v, longValL);
    // big rotate
    v = longVal.rotateLeft(60);
    assert.deepEqual(v, longValR);
    // swap
    v = longVal.rotateLeft(32);
    assert.deepEqual(v, longValS);
},
function testRotateRight() {
    var longVal = Long.fromBits(0x01234567, 0x89ABCDEF);
    var longValL = Long.fromBits(0x12345678, 0x9ABCDEF0);
    var longValR = Long.fromBits(0xF0123456, 0x789ABCDE);
    var longValS = Long.fromBits(0x89ABCDEF, 0x01234567);
    // little rotate
    var v =  longVal.rotateRight(4);
    assert.deepEqual(v, longValR);
    // big rotate
    v = longVal.rotateRight(60);
    assert.deepEqual(v, longValL);
    // swap
    v = longVal.rotateRight(32);
    assert.deepEqual(v, longValS);
}

]; // END TEST CASES

function runOurTests() {
    tests.forEach(function(fn) {
        console.log("- " + fn.name);
        try {
            fn();
        } catch (e) {
            console.log("\nERROR: " + e + "\n");
            process.exitCode = 1;
        }
    });
}

function runClosureTests() {
    require("./goog/base");
    goog.provide("goog.math");
    goog.math.Long = Long;
    require("./goog/recent/long_test");
    Object.keys(goog.global).forEach(function(key) {
    if (typeof goog.global[key] === "function") {
        console.log("- " + key);
        try {
            goog.global[key]();
        } catch (e) {
            console.log("\nERROR: " + e + "\n");
            process.exitCode = 1;
        }
    }
    });
}

console.log("Running our tests");
runOurTests();

console.log();

console.log("Running closure library tests");
runClosureTests();
