var Viking = require ('./viking.js');

var Pit = function () {
	this.turns = 7;
};

Pit.prototype.fight = function (first_viking, second_viking) {
 	for (var i = 0; i < this.turns; i++) {
 		if (this.stopBattle(first_viking, second_viking) === true ) { 
 			return console.log("battle stopped at turn "+i);
 		} else {
 			first_viking.health = first_viking.health - second_viking.strength;
 			second_viking.health = second_viking.health - first_viking.strength;			
 		}
 
 	}
 }

Pit.prototype.closeToDead = function (first_viking, second_viking) {
	if ((first_viking.health - second_viking.strength) <= 0) {
		return true;
	}
}

Pit.prototype.stopBattle = function (first_viking, second_viking) {
	if (this.closeToDead(first_viking, second_viking) || this.closeToDead(second_viking, first_viking)) {
		return true;
	}
}

module.exports = Pit;