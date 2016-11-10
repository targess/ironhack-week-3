var fs = require('fs');

function averageColon (error, numbers) {
	numbers = numbers || "";
	var my_array = numbers.split(/\W/);

 	var result = my_array.reduce(function(valorAnterior, valorActual) {
   		return parseInt(valorAnterior) + parseInt(valorActual);
	});
//	console.log(result / my_array.length);
	fs.writeFile('message.txt',(result / my_array.length));

}

fs.readFile('file.txt', 'utf8', averageColon);
