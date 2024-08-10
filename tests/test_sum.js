import assert from "assert";
import {sum} from "../index.js"


assert.strictEqual(sum(10, 10), 20, "WRONG");
assert.strictEqual(sum('10', 5), 15, "It must be 15 not 105");