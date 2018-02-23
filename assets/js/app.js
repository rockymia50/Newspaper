$( document ).ready(function() {

// create objects for each question within each question will be 4 choices

function quiz (question, answer,correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;



}
var score = 0
var quiz = [
    {
        question:"How many wheels does semi-truck have?",
        answer:["5","12","18","20"],
        correct:"18"
    },
    {
        question:"How many skittles are in a bag?",
        answer:["55","72","80","54"],
        correct:"72"
    },
    {
        question:"How many whiskers are on a cat's face",
        answer:["16","24","8","14"],
        correct:"24"
    },
    {
        question:"How many kernals are in a bag of popcorn?",
        answer:["400","450","200","350"]
    },
    {
        question:"How many skittles are in a bag?",
        answer:["200","150","123","320"]
    },
    {
        question:"How many skittles are in a bag?",
        answer:["200","150","123","320"]
    },
    {
        question:"How many skittles are in a bag?",
        answer:["200","150","123","320"]
    },
    {
        question:"How many skittles are in a bag?",
        answer:["200","150","123","320"]
    },
    {
        question:"How many skittles are in a bag?",
        answer:["200","150","123","320"]
    },
    {
        question:"How many skittles are in a bag?",
        answer:["200","150","123","320"]
    }
];


// create a function to display each object (each question and each answers)
function showQuestions (question){
    console.log(question); // 
    $("#questions").text(question);
}
function showAnswers (answers) {
    console.log(answers);
    // loop on answers array and show the answer and be able to select each answer
    for (var i = 0; i < answers.length; i++) {
        console.log(answers[i]);
        var answerElement = $('<span>' + answers[i] + '</span>');
        $(answerElement).on('click', function(event){
            console.log('clicked: ', event.currentTarget.innerHTML);
            // Handle clicking an answer here
            // alert(event.currentTarget);
            if(event.currentTarget.innerHTML == quiz[0].correct) {
                alert("Good Job");
            }
            else {
                alert("Wrong Answer Dweeb!" + "The correct answer is" +  quiz[0].correct);
 
            }
            });    

        $('#log' + (i + 1)).append(answerElement);
    }
}



var myQuestion = quiz[0].question;
showQuestions(myQuestion);
//var myAnswers = quiz[0].answer
showAnswers(quiz[0].answer); 


// Create a function to hide current question then show next question then run function showQuestions,showAnswers again,
// but iterate the next object in the array.












// display how many you have right and wrong, & maybe the percentag







});
