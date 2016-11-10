var exampleArray = [ 2, -5, 10, 5, 4, -10, 0];

var results = process(exampleArray);

function process (data) {
	var positions = [];
	data.forEach (function (value, i) {
		var j = j + i;
		data.forEach (function (value2, j) {
			if (j <= i) {
			if (value + value2 === 0) {positions.push (i +","+ j)}
			}
		});
	});
	// console.log("You can sum these pairs of numbers and get cero:");
	// console.log(positions)
	positions.forEach (function (value) {
		console.log("Sumando las siguientes posiciones el valor es 0: " + value);
	});
}

// console.log(results);

// => ["1,3", "2,5", "6,6"]

// for (var i = 0; i < data.lenght; i++) {
// 	for (var j = i; j < data.lenght; j++) {

// 	}
// }