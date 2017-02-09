var assert = require("chai").assert;
var check = require("../lib/luhn_algorithm_check");

describe("luhn_algorithm_check", function() {
  it("should return true if a number satisfies the Luhn algorithm", function() {
    var num = "79927398713";
    assert.isTrue(check(num));
  });

  it("should return false if a number does not satisfy the Luhn algorithm", function() {
    var num = "79927398711";
    assert.isFalse(check(num));
  });
});

