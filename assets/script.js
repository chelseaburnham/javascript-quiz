var button = document.querySelector(".button-element")
var mainContainer = document.getElementById("container")
var questionsContainer = document.querySelector(".questions-container")
var timerEl = document.querySelector(".timer")
var timer;
var sec = 59;
var isCorrect = true

var question1 = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var userAnswer = document.getElementById("user-answer")
var scoreContainer = document.getElementById("score-container")

var currentQuestion = 0
var numberCorrectQuestions = 0 

//object that contains the 5 questions, answer choices, and correct answer
var myQuiz = [
    {
        question: "Inside which element do we put Javascript?",
        answers: [
            {a: "<js>", isCorrect: false}, 
            {b: "<scripting>", isCorrect: false}, 
            {c: "<script>", isCorrect: true}, 
            {d: "<javascript>", isCorrect: false}
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'abc.js'?",
        answers: [
            {a: "<script href='abc.js>", isCorrect: false}, 
            {b: "<script name='abc.js'>", isCorrect: false}, 
            {c: "<script src='abc.js'>", isCorrect: true}, 
            {d: "None of the above", isCorrect: false}
        ]
    },
    {
        question: "What is mean by 'this' keyword in javascript?",
        answers: [
            {a: "It refers to the current object", isCorrect: true}, 
            {b: "It refers to the previous object", isCorrect: false}, 
            {c: "It is variable which contains value", isCorrect: false}, 
            {d: "None of the above", isCorrect: false}
        ]
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answers: [
            {a: "Storing numbers, dates, or other values", isCorrect: true}, 
            {b: "Varying randomly", isCorrect: false}, 
            {c: "Causing high-school algebra flashbacks", isCorrect: false}, 
            {d: "None of the above", isCorrect: false}
        ]
    },
    {
        question: "Which is not an example of a datatype?",
        answers: [
            {a: "boolean", isCorrect: false}, 
            {b: "variable", isCorrect: true}, 
            {c: "string", isCorrect: false}, 
            {d: "number", isCorrect: false}
        ]
    }
]


//this function creates the timer that counts down from 60 and stops at 0
function timerStart () {
    timer = setInterval(function name() {
        timerEl.innerText = sec;
        sec --;
    if (sec < 0) {
        score()
        }
    }, 1000);
    
}

//when the start button is clicked, the paragraph and button disappear, the timer starts, and the first question appears
button.addEventListener("click", function startButton() {
   mainContainer.setAttribute("style", "display: none");
   questionsContainer.setAttribute("style", "display: flex");
    timerStart();
    questionInput();
})

option1.addEventListener("click", next)
option2.addEventListener("click", next)
option3.addEventListener("click", next)
option4.addEventListener("click", next)


//this function moves through the questions, if the answer is incorrect it will display a message that is incorrect, and if the answer is correct, it will display a message that is correct
function next() {
    var answer = this.getAttribute("id") 
    if (answer === "option1" && myQuiz[currentQuestion].answers[0].isCorrect === false) {
        userAnswer.textContent = "That answer is incorrect.";
        sec-=5
    }else if (answer === "option2" && myQuiz[currentQuestion].answers[1].isCorrect === false) {
        userAnswer.textContent = "That answer is incorrect.";
        sec-=5
    } else if (answer === "option3" && myQuiz[currentQuestion].answers[2].isCorrect === false) {
        userAnswer.textContent = "That answer is incorrect.";
        sec-=5
    } else if (answer === "option4" && myQuiz[currentQuestion].answers[3].isCorrect === false) {
        userAnswer.textContent = "That answer is incorrect.";
        sec-=5
    } else {
        numberCorrectQuestions++;
        userAnswer.textContent = "That answer is correct.";
    }
    if(currentQuestion < myQuiz.length-1) {
        currentQuestion++;
        questionInput();
    } else {
        score()
    }
}

//this function displays the text content displayed in the myQuiz array depending on the current question
function questionInput() {
    question1.textContent = myQuiz[currentQuestion].question;
    option1.textContent = myQuiz[currentQuestion].answers[0].a;
    option2.textContent = myQuiz[currentQuestion].answers[1].b;
    option3.textContent = myQuiz[currentQuestion].answers[2].c;
    option4.textContent = myQuiz[currentQuestion].answers[3].d;
}

//this function clears the time so it stops at 0 instead of going into the negatives; it also makes the questions container disapper and displays the score
function score() {
    clearInterval(timer);
    timerEl.innerText = sec;
    questionsContainer.setAttribute("style", "display: none");
    scoreContainer.setAttribute("style", "display: flex");
    document.getElementById("score-number").textContent = "Score: " + (numberCorrectQuestions + sec);
}

var submit = document.getElementById("submit-button")

submit.addEventListener("click", function() {
    localStorage.setItem("user:", JSON.stringify(numberCorrectQuestions + sec))
})