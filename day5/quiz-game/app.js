var read = require('read');
var Quiz = require ('./quiz.js');


myQuiz = new Quiz;
myQuiz.loadQuestions();
myQuiz.startChallenge();