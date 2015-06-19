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

exports.translate = function(input) { //e.g. "O. O.\nOO .O\n.. .."
	return input.split("\n") //split each lines ["O. O.","OO .O", ".. .."] 
		.map(function(value) { //split by space for each lines [["O.","O."],["OO",".O"], ["..",".."]] 
			return value.split(" ");
		})
		.reduce(function(a, b) { //concat to code for same char in each element ["O.OO..", "O..O.."]
			return a.map(function(v, idx) {
				return v + b[idx];
			});
		})
		.reduce(function(a, b) { //translate to english and contact to a string "he"
			return a+dist[b];
		}, "");
};