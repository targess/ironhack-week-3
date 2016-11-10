var Viking = require ('./viking.js');
var Pit = require ('./pit.js');
var Saxon = require ('./saxon.js');
var Town = require ('./town.js');



Sergi = new Viking("Sergi", 50, 10);
Jony = new Viking("Jony", 40, 8);
Herve = new Viking("Herve", 30, 6);

// my_pit = new Pit;
// my_pit.fight(fighter1, fighter2);
// console.log(fighter1.name+" has "+fighter1.health+" health");
// console.log(fighter2.name+" has "+fighter2.health+" health");

var saxons = [];

for (var i = 0; i <= 30; i++) {
	saxons.push(new Saxon());
}

my_town = new Town;
my_town.assault([Sergi, Jony, Herve],saxons);