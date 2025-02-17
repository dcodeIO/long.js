import Long from "../../index.js";

Long.fromValue(1);

var long = new Long(0, 0);
long.toNumber();

function test(long: Long) {}

export default Long;
