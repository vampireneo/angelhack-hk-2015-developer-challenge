var braille = require("./braille.js");

var text = ".O O. .O OO O. O. .O OO O. OO O. .O O. .O\n\
O. .O O. .. .. OO OO .. .. .. OO OO .O OO\n\
O. O. O. O. .. O. O. O. OO .. .. .O O. .O";

console.log(braille.translate(text));