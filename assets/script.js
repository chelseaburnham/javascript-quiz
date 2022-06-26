var button = document.querySelector(".button-element")
var questions = document.querySelector(".questions")
var container = document.getElementById("container")

var questionInput = document.querySelector(".newQuestion")
var answerInput1 =  document.querySelector(".answer1")
var answerInput2 =  document.querySelector(".answer2")
var answerInput3 =  document.querySelector(".answer3")
var answerInput4 =  document.querySelector(".answer4")

button.addEventListener("click", function startButton () {
   container.setAttribute("style", "display: none");
   questions.setAttribute("style", "display: flex");
})

