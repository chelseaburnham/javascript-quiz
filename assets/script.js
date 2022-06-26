var button = document.querySelector(".button-element")
var mainContainer = document.getElementById("container")
var questionsContainer = document.querySelector(".questions-container")
var timerEl = document.querySelector(".timer")
var timer;
var sec = 59;
var isCorrect = true

var question1 = document.querySelector(".question");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");


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
        timerEl.innerHTML = +sec;
        sec --;
    if (sec < 0) {
        clearInterval(timer);
        }
    }, 1000);
    
}


button.addEventListener("click", function startButton() {
   mainContainer.setAttribute("style", "display: none");
   questionsContainer.setAttribute("style", "display: flex");
    timerStart();
    question1.textContent = myQuiz[0].question;
    option1.textContent = myQuiz[0].answers[0].a;
    option2.textContent = myQuiz[0].answers[1].b;
    option3.textContent = myQuiz[0].answers[2].c;
    option4.textContent = myQuiz[0].answers[3].d;
})

option3.addEventListener("click", function next() {
    if (isCorrect === true) {
        question1.textContent = myQuiz[1].question;
        option1.textContent = myQuiz[1].answers[0].a;
        option2.textContent = myQuiz[1].answers[1].b;
        option3.textContent = myQuiz[1].answers[2].c;
        option4.textContent = myQuiz[1].answers[3].d;
    } else if(isCorrect === false) {
        console.log("false")
    }
})