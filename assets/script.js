var button = document.querySelector(".button-element")
var questions = document.querySelector(".questions")
var container = document.getElementById("container")

var questionInput = document.querySelector(".newQuestion")
var answerInput1 =  document.querySelector(".answer1")
var answerInput2 =  document.querySelector(".answer2")
var answerInput3 =  document.querySelector(".answer3")
var answerInput4 =  document.querySelector(".answer4")
var timerEl = document.querySelector(".timer")
var timer;

button.addEventListener("click", function startButton () {
   container.setAttribute("style", "display: none");
   questions.setAttribute("style", "display: flex");
    timerStart();
    return question1();
})

function timerStart () {
    var sec = 60;
    timer = setInterval(()=>{
        timerEl.innerHTML = +sec;
        sec --;
    }, 1000);
    if (sec < 0) {
        clearInterval(interval);
    }
}


//how do I clear interval for when the seconds or timer hits 0?









function question1() {
    questionInput.textContent = "Inside which element do we put Javascript?";
    answerInput1.textContent = "<js>";
    answerInput2.textContent = "<scripting>";
    answerInput3.textContent = "<script>";
    answerInput4.textContent = "<javascript>";
}

function question2() {
    questionInput.textContent = "What is the correct syntax for referring to an external script called 'abc.js'?";
    answerInput1.textContent = "<script href='abc.js>'";
    answerInput2.textContent = "<script name='abc.js'>";
    answerInput3.textContent = "<script src='abc.js'>";
    answerInput4.textContent = "None of the above";
}

function question2() {
    questionInput.textContent = "What is mean by 'this' keyword in javascript?";
    answerInput1.textContent = "It refers current object";
    answerInput2.textContent = "It referes previous object";
    answerInput3.textContent = "It is variable which contains value";
    answerInput4.textContent = "None of the above";
}

function question2() {
    questionInput.textContent = "What are variables used for in JavaScript Programs?";
    answerInput1.textContent = "Storing numbers, dates, or other values";
    answerInput2.textContent = "Varying randomly";
    answerInput3.textContent = "Causing high-school algebra flashbacks";
    answerInput4.textContent = "None of the above";
}

function question2() {
    questionInput.textContent = "Which is not an example of a datatype?";
    answerInput1.textContent = "boolean";
    answerInput2.textContent = "number";
    answerInput3.textContent = "variable";
    answerInput4.textContent = "string";
}