var dist = {
	"O....." : "a",
	"O.O..." : "b",
	"OO...." : "c",
	"OO.O.." : "d",
	"O..O.." : "e",
	"OOO..." : "f",
	"OOOO.." : "g",
	"O.OO.." : "h",
	".OO..." : "i",
	".OOO.." : "j",
	"O...O." : "k",
	"O.O.O." : "l",
	"OO..O." : "m",
	"OO.OO." : "n",
	"O..OO." : "o",
	"OOO.O." : "p",
	"OOOOO." : "q",
	"O.OOO." : "r",
	".OO.O." : "s",
	".OOOO." : "t",
	"O...OO" : "u",
	"O.O.OO" : "v",
	".OOO.O" : "w",
	"OO..OO" : "x",
	"OO.OOO" : "y",
	"O..OOO" : "z"
};

function translate(input) {
	return input.split("\n").map(function(value) {
		return value.split(" ");
	}).reduce(function(a, b) {
		for(var i = 0; i < a.length; i++) {
			a[i] += b[i];
		}
		return a;
	}).reduce(function(a, b) {
		return a+dist[b];
	}, "");
}

var test1 = "O. O. O. O. O. .O O. O. O. OO\n\
OO .O O. O. .O OO .O OO O. .O\n\
.. .. O. O. O. .O O. O. O. ..";

var text = ".O O. .O OO O. O. .O OO O. OO O. .O O. .O\n\
O. .O O. .. .. OO OO .. .. .. OO OO .O OO\n\
O. O. O. O. .. O. O. O. OO .. .. .O O. .O";

//console.log(translate(test1));
console.log(translate(text));