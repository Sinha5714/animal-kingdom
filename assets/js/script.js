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
    },
    {
        question: 'assets/images/animals/lion.jpeg',
        answers: ['Tiger', 'Lion','Cheetah','Puma' ],
        answer : 'Lion'
    }, 
    {
        question: 'assets/images/animals/lizard.jpeg',
        answers: ['Lizard', 'Snake','Spider','Frog' ],
        answer : 'Lizard'
    }, 
    {
        question: 'assets/images/animals/monkey.jpeg',
        answers: ['Chimpanzee', 'Gorilla','Monkey','Dog' ],
        answer : 'Monkey'
    }, 
    {
        question: 'assets/images/animals/mosquito.webp',
        answers: ['Butterfly', 'Bug','Mosquito','Frog' ],
        answer : 'Mosquito'
    }, 
    {
        question: 'assets/images/animals/octopus.jpeg',
        answers: ['Octopus', 'Fish','Prawn','Squid' ],
        answer : 'Octopus'
    }, 
    {
        question: 'assets/images/animals/ostrich.jpeg',
        answers: ['Sparrow', 'Crow','Ostrich','Parrot' ],
        answer : 'Ostrich'
    }, 
    {
        question: 'assets/images/animals/owl.jpeg',
        answers: ['Owl', 'Parrot','Emu','Ostrich' ],
        answer : 'Owl'
    }, 
    {
        question: 'assets/images/animals/parrot.webp',
        answers: ['Duck', 'Crow','Ostrich','Parrot'],
        answer : 'Parrot'
    }, 
    {
        question: 'assets/images/animals/rabbit.jpeg',
        answers: ['Tiger', 'Rabbit','Otter','Rat' ],
        answer : 'Rabbit'
    }, 
    {
        question: 'assets/images/animals/squirrel.jpeg',
        answers: ['Fox', 'Rabbit','Squirrel','Rat' ],
        answer : 'Squirrel'
    }, 
    {
        question: 'assets/images/animals/tortoise.jpeg',
        answers: ['Tortoise', 'Turtle','Dinosaur','Slug' ],
        answer : 'Tortoise'
    },
    {
        question: 'assets/images/animals/tiger.jpeg',
        answers: ['Leopard', 'Lion','Tiger','Puma' ],
        answer : 'Tiger'
    },
    {
        question: 'assets/images/animals/zebra.jpeg',
        answers: ['Cow', 'Donkey','Horse','Zebra' ],
        answer : 'Zebra'
    }
];
/**
* DOM elements here 
*/
let gameArea = document.querySelector('.game-area');
let rulesArea = document.querySelector('.rules-area');
let quizArea = document.querySelector('.quiz-area');
let highScoreArea = document.querySelector('.high-score-area');
let enterNameArea = document.querySelector('.enter-name');


let qImg= document.getElementById('quiz-image');
let answerButtons = document.getElementsByClassName('answer');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let userScore = document.getElementById('user-score');
let timerElement = document.getElementById('timer');

let userName = document.getElementById('username');
let endPage = document.querySelector('.end-page');
let userAnswer = document.getElementById('user-answer');
let table = document.getElementById('high-scores');
let userFinalScore = document.getElementById('user-final-score');

let availableQuestions = []; 
let quizProgress = 0;
let correctQuestions= 0; // The correct questions selected by user
let currentQuestion = {};
let timer;
let timeLeft;

/**
 * Function for opening Enter Name Area
 */
function enterName(){
    gameArea.classList.add('hidden');
    enterNameArea.classList.remove('hidden');
    userName.value = "";
}
/**
 * Function for opening rules page
 * Applied to buttons when clicked
 */
function openRule(){
    gameArea.classList.add("hidden");
    rulesArea.classList.remove("hidden");    
}
/**
 * Function to close rules page and back to main page
 * Applied to buttons when clicked
 */
function closeRule(){
    gameArea.classList.remove("hidden");
    rulesArea.classList.add("hidden");   
}
/**
 * Function for opening high score page
 * Applied to buttons when clicked
 */
function openHighScore(){
    gameArea.classList.add("hidden");
    highScoreArea.classList.remove("hidden");
}
/**
 * Function to close high score page
 * Applied to buttons when clicked
 */
function closeHighScore(){
    gameArea.classList.remove("hidden");
    highScoreArea.classList.add("hidden");
    window.location.reload();
}

/** 
 * startGame function here
 */
function startGame(){
    enterNameArea.classList.add("hidden");
    quizArea.classList.remove("hidden");
    let welcomeStatement = document.getElementById('guess');
    let html = `
    <h3> Welcome ${userName.value}!</h3>
    <h4> Guess The Animal In The Image </h4>
    `;
    welcomeStatement.innerHTML = html;
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
    //Once the length of question reaches 10, endPage opens and score is updated 
    if(quizProgress > 10){
        quizArea.classList.add('hidden');
        endPage.classList.remove('hidden');
        userFinalScore.innerText = userScore.innerText;
        userAnswer.innerText = `${correctQuestions}`;
        let congratsMessage = document.getElementById('congrats');
        let html = `
        <h2> Well Done ${userName.value}! </h2>
        `;
        congratsMessage.innerHTML = html;
           
    }

    let shuffleQuestions = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[shuffleQuestions];
    qImg.src = currentQuestion.question;
    option1.innerText = currentQuestion.answers[0];
    option2.innerText = currentQuestion.answers[1];
    option3.innerText = currentQuestion.answers[2];
    option4.innerText = currentQuestion.answers[3]; 
    // For making sure question displayed is not repeated
    // Obtain idea of splice from my family member 
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
    for(let i=0; i<answerButtons.length; i++){
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
    correctQuestions++;  
}
/**
 * Function for Btn go-Home in quizArea
 */
function restartGame(){
    quizProgress = 0;
    startGame();
    resetAnswerButtons();
    userScore.innerText = 0;
    clearInterval(timer);
    
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

/**
 * Function for closing end page
 * Applied to buttons when clicked
 */
function closeEndPage(){
    gameArea.classList.remove("hidden");
    endPage.classList.add("hidden");
    window.location.reload();       
}

/**
 * Function to save username and score in the highScore table
 */
function saveHighScore(){
    endPage.classList.add("hidden");
    highScoreArea.classList.remove("hidden");
    userFinalScore = userScore.innerText;
    let playerName = userName.value;
    let row = table.insertRow();
    let td1 = row.insertCell(0);
    let td2 = row.insertCell(1);
    td1.innerText =  playerName;
    td2.innerText = userFinalScore; 
}


