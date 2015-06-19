var assert = require("assert"); // node.js core module
var braille = require("../braille.js");

describe('Braille', function() {
	it('should retrun g', function() {
		assert.equal("g",braille.translate("OO\nOO\n.."));
	})
	it('should retrun he', function() {
		assert.equal("he",braille.translate("O. O.\nOO .O\n.. .."));
	})
	it('should retrun helloworld', function() {
		var text = "O. O. O. O. O. .O O. O. O. OO\n\
OO .O O. O. .O OO .O OO O. .O\n\
.. .. O. O. O. .O O. O. O. ..";
		assert.equal("helloworld",braille.translate(text));
	})
});