var expect = require("chai").expect;

var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;

var string = "Chase is a jerk"
var newstring = "Chs s  jrk"



describe("disemvowel", function() {
  it("should remove all vowels from a string", function() {
    expect(disemvowel(string)).to.be.a("string");
    expect(disemvowel(string)).to.equal(newstring);
  });


  // it("should throw when not passed numbers", function() {
  //   expect(function() {
  //     multiply(2, "4");
  //   }).to.throw(Error);
  // }); 

});