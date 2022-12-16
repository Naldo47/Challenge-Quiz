
var buton0 = document.querySelector(".viewscore");
var questionQZ = document.querySelector(".questionQ");
var highScoreB = document.querySelector(".highscoreBT");
var tryAgain = document.querySelector(".buton-3");
var clearButon = document.querySelector(".buton-4");
var title = document.querySelector(".title");
var timer1 = document.querySelector("#timer");
var highScoreE = document.querySelector(".highscore");
var timeEl = document.querySelector(".timedisplay")
 var count2 ;

const question = [
    {
    questions: "Solve the following equation 24÷8=?",
    choices: {
        a: "3",
        b: "12",
        c: "7",
        d: "9",
    },
    answer: "3",
},

{
    question: "Solve the following equation 9x34=?",
   choices: {
        a: "302",
        b: "306",
        c: "345",
        d: "405",
    },
    correctAnswer: "306",

},

{
    question: "Solve the following equation 7÷44=?",
    choices:{
        a: "6.23",
        b: "7.33",
        c: "6.28",
        d: "7,28",
    },
    correctAnswer: "6.28",
    
},

{
    question: "Solve the following equation 8x9=?",
   choices: {
        a: '46',
        b: "67",
        c: "72",
        d: "89",
    },
    correctAnswer: "72",

},

{
    question: "Solve the following equation 10÷76",
   choices: {
        a: "5.4",
        b: "7.6",
        c: "6.7",
        d: "8.0"
    },
    correctAnswer: "7.6",
}

];


//Function Section

function startGame(){
     count2 = setInterval(timer , 1000);
console.log("click")
}
var count = 20;


function timer() {
    console.log(count)
    if (count <= 0){
     clearInterval(count2)
    }
    timeEl.textContent = count
    count = count - 1
    return
}
timer1.addEventListener("click", startGame )



function Quiz(){
    
}