var Town = function () {
	this.turns = Math.floor((Math.random() * 4) + 5);
	this.saxons_casualties = [];
	this.vikings_casualties = [];
};

Town.prototype.final_casualities = function (vikings, saxons) {
	console.log('Saxons total casualties: ' +this.saxons_casualties.length+ 
		' and still alive '+saxons.length);
	console.log('Vikings total casualties: ' +this.vikings_casualties.length+
		' and still alive '+vikings.length);
}

Town.prototype.assault = function (vikings, saxons) {

	saxons_casualties = this.saxons_casualties;
	vikings_casualties = this.vikings_casualties;
	var i = 0;
	while ((i < this.turns ) && (saxons.length > 0 )) {
	
		vikings.every(function(viking){
			saxon_index = Math.floor(Math.random()*saxons.length);
			viking.health = viking.health - saxons[saxon_index].strength;
			saxons[saxon_index].health = saxons[saxon_index].health - viking.strength;

			if (saxons[saxon_index].health <= 0) {
	    		saxons_casualties.push(saxons[saxon_index]);
	    		saxons.splice(saxon_index, 1); 
			}
			if (saxons.length === 0) { return false; }

			if (viking.health <= 0) {
	    		vikings_casualties.push(viking);
	    		vikings.splice(vikings.indexOf(viking), 1); 
			}

		});
		i++;
	}
	this.final_casualities(vikings, saxons);

}

module.exports = Town;

