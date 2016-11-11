var read = require('read');

var Question = function(text, answer, id) {
	this.text = text;
	this.answer = answer;
	this.id = id;
	this.points = 1;
};

Question.prototype.checkAnswer = function (userAnswer) {
	if (userAnswer === this.answer) { 
		console.log("bien fiera!");
		return true;
	} else {
		console.log("meeeeec!");
		return false;
	}
};

module.exports = Question;