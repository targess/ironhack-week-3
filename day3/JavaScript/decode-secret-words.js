var words, message;

words = [
	"dead",				// 1st
	"bygone",			// 2nd
	"landing",			// 3rd
	"cheaply",			// 4th
	"assumed",			// 5th
	"incorrectly",		// 1st
	"attention",		// 2nd
	"agent"				// 3rd
];

words2 = [
	"January", "lacks", "caveats", "hazardous", "DOORS", "crying", 
	"arrogantly", "climate", "proponent", "rebuttal"
];

// message should be "dynamite"
message = decoder(words);
console.log(message);
console.log(decoder(words2));

function decoder(words) {
	var index = 0;
	var secretMessage = "";

	for (var i = 0; i < words.length; i++) {
		secretMessage += words[i].charAt(index);

		var index = (index + 1) % 5;

		// index += 1;
		// if (index + 1 === 6) { index = 0}
	}

	return secretMessage;
}
