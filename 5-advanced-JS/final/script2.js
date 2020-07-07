function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};

let q1 = new Question("What is blue?", ["ocean", "sky"], "ocean");

let q2 = new Question("What is red?", ["fire truck", "fire"], "fire");

let q3 = new Question("What is green?", ["grass", "algae"], "grass");

let questionArray = [q1, q2, q3];
Question.prototype.askQuestion = function(){
    console.log(this.question);
    console.log(this.answers);
}

q1.askQuestion();

var answer = "";
while(answer !== this.correctAnswer) answer = prompt("What answer position number is the correct answer?");
