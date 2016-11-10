var decoder = require("./decoder.js");

// types = every, even, odd
// 1 to forwards 
// 0 to backwards

function super_decoder(sentence, type, forwards) {
	var forwards = forwards || false;
	var words = [];
	if (type === "every") {
		words = sentence.split(" ");
	} else if (type === "even") {
		words = sentence.split(" ").filter( function(value, i) { return !(i % 2) });
		// sentence.split(" ").forEach (function (value, i) {
		// 	if ((i % 2) === 0) { words.push(value) }
		// });
	} else if (type === "odd"){
		words = sentence.split(" ").filter( function(value, i) { return (i % 2) });
		// sentence.split(" ").forEach (function (value, i) {
		// if ((i % 2) === 1) { words.push(value) }
		// });
	}

	if (forwards) {
		return decoder(words);
	} else {
		return decoder(words.reverse());
	}
}

var sentence1 = "Attack her nose under here with an itch";
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"

console.log(super_decoder(sentence1, "every"));
console.log(super_decoder(sentence2, "every", 1));
console.log(super_decoder(sentence3, "every"));
console.log(super_decoder(sentence4, "even", 1));
console.log(super_decoder(sentence5, "even"));
