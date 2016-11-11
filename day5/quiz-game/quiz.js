var read = require('read');
var Question = require ('./question.js');

var Quiz = function() {
	this.questions = [];
	this.count = 0;
	this.points = 0;
};

Quiz.prototype.startChallenge = function () {

	this.doQuestion();
};

Quiz.prototype.getAnswer = function (error, answer) {

	theQuestion = this.questions[this.count];

	if (theQuestion.checkAnswer(answer)) {
		this.points = this.points + theQuestion.points;
	} else { this.points = this.points - theQuestion.points; }
	this.count++;
	
	if (this.count < this.questions.length) {
		this.doQuestion();
	} else { console.log("final score: " + this.points)}
}

Quiz.prototype.loadQuestions = function () {
	this.questions.push(new Question ('¿De que color era el caballo blanco de Santiago?', 'blanco', 1) );
	this.questions.push(new Question ('¿Cuantos lobitos tiene la loba?', '5', 2) );
	this.questions.push(new Question ('Que animal vio caperucita?', 'lobo', 3) );
	this.questions.push(new Question ('Quién llegó antes, la liebre o la tortuga?', 'la tortuga', 4) );
};

Quiz.prototype.doQuestion = function(){
	
	options = { prompt: this.questions[this.count].text + "(total points: " + this.points + " )" }
	read(options, this.getAnswer.bind(this));
};

module.exports = Quiz;