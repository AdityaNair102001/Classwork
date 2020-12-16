var readLineSync = require("readline-sync");
const chalk = require('chalk');
 

var questions= [{question:chalk.red("Whats your name?"),answer:"Aditya"},
{question:chalk.blue("How old are you?"),answer:"19"},
{question:chalk.greenBright("Where are you from?"),answer:"Mumbai"},
{question:chalk.yellowBright("Whats your favourite sport?"),answer:"Football"}];  

var score=0;

function play(question,answer)
{
  var useranswer=readLineSync.question(chalk.bold(question)+"\n");
  if(useranswer==answer)
  {
   console.log("Right answer");
   console.log("Your Score:" + ++score);
   console.log("--------");
  }
  else 
  {
    console.log("wrong"+"\n"+"try again!");
    i--;
  }
}
for(var i=0;i<questions.length;i++)
{
 play(questions[i].question,questions[i].answer);
}