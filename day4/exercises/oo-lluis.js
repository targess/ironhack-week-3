var Lluis = function (color, altura, peso) {
	this.color = color;
	this.altura = altura;
	this. peso = peso; 
}

Lluis.prototype.decirChorradas = function() {
	console.log("Recicla!!");
}

var lluis18 = new Lluis("moreno", 1.90, 85);
var lluis30 = new Lluis("moreno", 1.90, 95);

lluis30.decirChorradas();