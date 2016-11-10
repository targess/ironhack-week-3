var fs = require('fs');

function discardRepeated (error, numbers) {
	value = numbers.split(',').filter(function(elem, index, self) {
    	return index == self.indexOf(elem);
	})
	console.log(value);
}
fs.readFile('file.txt', 'utf8', discardRepeated);
