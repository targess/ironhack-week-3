var numbers = '80:70&90:100';
console.log( averageColon(numbers) === 85);
//=> true

function averageColon (numbers) {
	numbers = numbers || "";
	var my_array = numbers.split(/\W/);

	// my_array.forEach (function (value, i) {
	// 	result = result + parseInt(value);
	// });

 	var result = my_array.reduce(function(valorAnterior, valorActual) {
   		return parseInt(valorAnterior) + parseInt(valorActual);
	});
	return result / my_array.length;
}

console.log( averageColon());