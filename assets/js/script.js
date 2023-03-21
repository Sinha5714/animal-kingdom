// Questions for the quiz game 
let questions = [
    {
        question : 'assets/images/animals/alpaca.jpeg',
        answers: ['Deer', 'Alpaca','Bear','Sheep' ],
        answer : 'Alpaca'
    },
    {
        question: 'assets/images/animals/ant.webp',
        answers: ['Ant', 'Spider','Lizard','Snake' ],
        answer : 'Ant'
    },
    {
        question: 'assets/images/animals/bear.jpeg',
        answers: ['Lion', 'Bear','Fox','Wolf' ],
        answer : 'Bear'
    },
    {
        question: 'assets/images/animals/butterfly.webp',
        answers: ['Spider', 'Frog','Peacock','Butterfly' ],
        answer : 'Butterfly'
    },
    {
        question: 'assets/images/animals/cat.webp',
        answers: ['Dog', 'Cat','Horse','Cheetah' ],
        answer : 'Cat'
    },
    {
        question: 'assets/images/animals/cheetah.jpeg',
        answers: ['Leopard', 'Cat','Cheetah','Hippopotamus' ],
        answer : 'Cheetah'
    },
    {
        question: 'assets/images/animals/cow.jpeg',
        answers: ['Buffalo', 'Cow','Tiger','Goat' ],
        answer : 'Cow'
    },
    {
        question: 'assets/images/animals/crocodile.jpeg',
        answers: ['Crocodile', 'Hippopotamus','Rhinoceros','Snake' ],
        answer : 'Crocodile'
    },
    {
        question: 'assets/images/animals/deer.jpeg',
        answers: ['Cow', 'Tiger','Lion','Deer' ],
        answer : 'Deer'
    },
    {
        question: 'assets/images/animals/dog.webp',
        answers: ['Cat', 'Dog','Wolf','Sheep' ],
        answer : 'Dog'
    },
    {
        question: 'assets/images/animals/dolphin.webp',
        answers: ['Whale', 'Dolphin','Shark','Fish' ],
        answer : 'Dolphin'
    },
    {
        question: 'assets/images/animals/donkey.jpeg',
        answers: ['Horse', 'Cow','Deer','Donkey' ],
        answer : 'Donkey'
    },
    {
        question: 'assets/images/animals/duck.jpeg',
        answers: ['Eagle', 'Sparrow','Duck','Peacock' ],
        answer : 'Duck'
    },
    {
        question: 'assets/images/animals/eagle.webp',
        answers: ['Peacock', 'Eagle','Lion','Pelican' ],
        answer : 'Eagle'
    },
    {
        question: 'assets/images/animals/elephant.jpeg',
        answers: ['Elephant', 'Giraffe','Alpaca','Cow' ],
        answer : 'Elephant'
    },
    {
        question: 'assets/images/animals/fish.jpeg',
        answers: ['Shark', 'Snake','Butterfly','Fish' ],
        answer : 'Fish'
    },
    {
        question: 'assets/images/animals/flamingo.webp',
        answers: ['Pelican', 'Swan','Flamingo','Sparrow' ],
        answer : 'Flamingo'
    },
    {
        question: 'assets/images/animals/fox.jpeg',
        answers: ['Fox', 'Wolf','Dog','Cat' ],
        answer : 'Fox'
    },
    {
        question: 'assets/images/animals/frog.jpeg',
        answers: ['Snake', 'Frog','Lizard','Deer' ],
        answer : 'Frog'
    },
    {
        question: 'assets/images/animals/giraffe.jpeg',
        answers: ['Lion', 'Elephant','Giraffe','Camel' ],
        answer : 'Giraffe'
    }   
];
/**
* DOM elements here 
*/
let gameArea = document.querySelector('.game-area');
let openRulesBtn = document.getElementById('rules-btn');
let rulesArea = document.querySelector('.rules-area');
let returnHome = document.getElementById('home-btn');
let startGameBtn = document.getElementById('play-btn');
let quizArea = document.querySelector('.quiz-area');
let highScoreBtn = document.getElementById('high-scores-btn');
let highScoreArea = document.querySelector('.high-score-area');

let questionContainer = document.getElementById('question-container');
let qImg= document.getElementById('quiz-image');
let answerButtons = document.getElementsByClassName('answer');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let goHomeBtn = document.getElementById('go-home-btn');
let nextBtn= document.getElementById('next-btn');
let userScore = document.getElementById('user-score');
let timerElement = document.getElementById('timer');

let userName = document.querySelector('.username');
let endPage = document.querySelector('.end-page');
let endHomeBtn= document.getElementById('end-home-btn');
let userAnswer = document.getElementById('user-answer');
let table = document.getElementById('high-scores');
let userFinalScore = document.getElementById('user-final-score');

let availableQuestions = []; 
let quizProgress = 0;
let correctQuestions= 0;
let currentQuestion = {};
let timer;
let timeLeft;

/** 
 * startGame function here
 */
function startGame(){
    gameArea.classList.add("hidden");
    quizArea.classList.remove("hidden");
    correctQuestions = 0;
    availableQuestions = [...questions]; // Full copy of questions
    newQuestions();
    startTimer();
    timerElement.innerText = 15;
             
}
/**
 * Add event listener to answerButtons
 */
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", checkAnswer);
}
/**
 * Fuction newQuestions for randomly generating questions
 */
function newQuestions(){ 
    quizProgress++;
    if(quizProgress > 10){
        quizArea.classList.add('hidden');
        endPage.classList.remove('hidden');
        userFinalScore.innerText = userScore.innerText;
        userName.value = '';    
    }

    let shuffleQuestions = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[shuffleQuestions];
    qImg.src = currentQuestion.question;
    option1.innerText = currentQuestion.answers[0];
    option2.innerText = currentQuestion.answers[1];
    option3.innerText = currentQuestion.answers[2];
    option4.innerText = currentQuestion.answers[3]; 
    // For making sure question displayed is not repeated
    // Obtain idea of splice from my Sister 
    availableQuestions.splice(shuffleQuestions, 1); 
  
}
/**
 * Function to check answer provided by user
 */
function checkAnswer() {
    disableAnswerButtons();
    
    let userAnswer = this.innerText;
    let correctAnswer = currentQuestion.answer;
    
        if (userAnswer === correctAnswer) {
            this.classList.add("correct");
            incrementScore(); 
             
            
        } else {
            this.classList.add("incorrect"); 
        }
       
}
/**
 * Function to disable answerButtons once an option has been selected
 */
function disableAnswerButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("hover");
        // Idea about setAttribute was provided by one of the student from slack
        answerButtons[i].setAttribute("disabled", "disabled");
    }
}
/**
 * Function for behaviour of page after getting next question
 */
function nextQuestion() {
    timerElement.innerText = 15;
    startTimer();
    resetTimer();
    newQuestions();
    resetAnswerButtons();    
}
/**
 * Resets the answerButton back to its original state
 */ 
function resetAnswerButtons() {
    for(i=0; i<answerButtons.length; i++){
        answerButtons[i].classList.remove("correct");
        answerButtons[i].classList.remove("incorrect");
        answerButtons[i].classList.add("hover");
        answerButtons[i].removeAttribute("disabled","disabled");
    } 
}
/**
 * Function to increment score once the right option is selected by user
 * Idea taken from Love Maths project
 */
function incrementScore(){
    let oldScore = parseInt(userScore.innerText);
    userScore.innerText = oldScore + 10;    
}
/**
 * Function for Btn go Home in quizArea
 */
function goHome(){
    gameArea.classList.remove("hidden");
    quizArea.classList.add("hidden");
    window.location.reload();
}
/**
 * Function to start timer in quiz area
 */
function startTimer(){
    timeLeft = 15;
    timer = setInterval(function () {
        countdown();
        timerElement.innerText = timeLeft;
    }, 1000);
}
/**
 * Function for count down of timer
 * Idea obtain from one of the students from slack
 */
function countdown() {
    if (timeLeft === 0) {
       disableAnswerButtons();
    } else {
        timeLeft--;
    }
}
/**
 * Function to reset timer
 * Idea obtain from google.com
 */
function resetTimer(){
    clearInterval(timer);
}

