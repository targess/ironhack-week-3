function chart_in_range (value) {
	if (((value >= 97) && (value <= 122)) || ((value >= 65) && (value <= 90))) {
		return value;
	} else if ((value < 97 && value > 90) || (value < 65)) {
		return value + 26;
	} else if ((value > 90 && value < 97) || (value > 122)) {
		return value - 26;
	}
}

function caesarCipher (message, shift) {
	shift = shift || -3;
	my_message = "";
	for (var i = 0; i < message.length ; i++) {
		if ((message[i] >= "A" && message[i] <= "Z") || (message[i] >= "a" && message[i] <= "z")) {

			var new_chart = chart_in_range(message.charCodeAt(i) + shift);

			my_message += String.fromCharCode((new_chart));	
		} else {
			my_message += message[i];	
		}	
	}
	return my_message;

	// message = message.split("");
	// return message.map(function(currentValue) { 
	// 	return String.fromCharCode(currentValue.charCodeAt(0) + shift);
	// });

}

encrypted = caesarCipher("Et tu, brute?");
console.log(encrypted);

encrypted = caesarCipher("Et tu, brute?", + 6);
console.log(encrypted);
