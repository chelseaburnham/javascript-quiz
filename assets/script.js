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

function timerStart () {
    timer = setInterval(()=>{
        timerEl.innerText = sec;
        sec --;
    if (sec < 0) {
        score()
        }
    }, 1000);
    
}


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

function next() {
    // if (isCorrect === true) {
    //     question1.textContent = myQuiz[1].question;
    //     option1.textContent = myQuiz[1].answers[0].a;
    //     option2.textContent = myQuiz[1].answers[1].b;
    //     option3.textContent = myQuiz[1].answers[2].c;
    //     option4.textContent = myQuiz[1].answers[3].d;
    // } else if(isCorrect === false) {
    //     console.log("false")
    // }
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
        console.log("test");
        score()
    }
}

function questionInput() {
    question1.textContent = myQuiz[currentQuestion].question;
    option1.textContent = myQuiz[currentQuestion].answers[0].a;
    option2.textContent = myQuiz[currentQuestion].answers[1].b;
    option3.textContent = myQuiz[currentQuestion].answers[2].c;
    option4.textContent = myQuiz[currentQuestion].answers[3].d;
}

function score() {
    clearInterval(timer);
    timerEl.innerText = sec;
    questionsContainer.setAttribute("style", "display: none");
    scoreContainer.setAttribute("style", "display: flex");
    document.getElementById("score-table").textContent = "Score: " + (numberCorrectQuestions + sec)
}