var wrapper = document.getElementsByClassName("wrapper");

const start = document.getElementsByClassName("start");

const q1 = document.getElementsByClassName("question1");
const q2 = document.getElementsByClassName("question2");
const q3 = document.getElementsByClassName("question3");
const q4 = document.getElementsByClassName("question4");
const q5 = document.getElementsByClassName("question5");

const GameOver = document.getElementsByClassName("gameOver");

const highScores = document.getElementsByClassName("highScores");

const answers = document.getElementsByClassName("answers");

const startButton = document.getElementById("startButton");



var timer = document.getElementById("timer");




for(i=0;i<answers.length;i++){
    answers[i].addEventListener("mousedown", clickFX);
}


startButton.addEventListener("mousedown", clickFX);
startButton.addEventListener("mouseup", setTime);
startButton.addEventListener("mouseup", toQ1);

var secondsLeft = 75;
timer.textContent= "time: " + secondsLeft;
var timerInterval;
function setTime(){
secondsLeft = 2;
timerInterval = setInterval(function(){
    secondsLeft--;
    timer.textContent= "time: " + secondsLeft;

    if(secondsLeft===0){
        
        clearInterval(timerInterval);

         earlyGame();
        
        
        
            
        
        

    
    }
},1000)

function earlyGame () {

    q1[0].style.display="none";
    q2[0].style.display="none";
    q3[0].style.display="none";
    q4[0].style.display="none";
    q5[0].style.display="none";
    
    
    GameOver[0].style.display="block";
    GameOver[1].style.display="block";
    GameOver[2].style.display="block";
}
}
function clickFX () {
    this.style.backgroundColor="palevioletred";
}

function toQ1() {

    this.style.backgroundColor="blueviolet";

  for (i = 0; i < start.length; i++) {
    start[i].style.display = "none";
  }
  for (i = 0; i < q1.length; i++) {
    q1[i].style.display = "block";
  }



}



const i1 = document.getElementsByClassName("incorrect1");
const c1 = document.getElementById("correct1");

c1.addEventListener("mouseup", toQ2);

for (i = 0; i <i1.length;i++){
    i1[i].addEventListener("mouseup", toQ2);
    i1[i].addEventListener("mouseup", minusPoints);
}

function toQ2() {

    this.style.backgroundColor="blueviolet";

    for (i = 0; i < q1.length; i++) {
        q1[i].style.display = "none";
      }
      for (i = 0; i < q2.length; i++) {
        q2[i].style.display = "block";
      }
}



const i2 = document.getElementsByClassName("incorrect2");
const c2 = document.getElementById("correct2");

c2.addEventListener("mouseup", toQ3);

for (i = 0; i <i2.length;i++){
    i2[i].addEventListener("mouseup", toQ3);
    i2[i].addEventListener("mouseup", minusPoints);
}

function toQ3() {

    this.style.backgroundColor="blueviolet";

    for (i = 0; i < q2.length; i++) {
        q2[i].style.display = "none";
      }
      for (i = 0; i < q3.length; i++) {
        q3[i].style.display = "block";
      }
}



const i3 = document.getElementsByClassName("incorrect3");
const c3 = document.getElementById("correct3");

c3.addEventListener("mouseup", toQ4);

for (i = 0; i <i3.length;i++){
    i3[i].addEventListener("mouseup", toQ4);
    i3[i].addEventListener("mouseup", minusPoints);
}

function toQ4() {

    this.style.backgroundColor="blueviolet";

    for (i = 0; i < q3.length; i++) {
        q3[i].style.display = "none";
      }
      for (i = 0; i < q4.length; i++) {
        q4[i].style.display = "block";
      }
}



const i4 = document.getElementsByClassName("incorrect4");
const c4 = document.getElementById("correct4");

c4.addEventListener("mouseup", toQ5);

for (i = 0; i <i4.length;i++){
    i4[i].addEventListener("mouseup", toQ5);
    i4[i].addEventListener("mouseup", minusPoints);
}

function toQ5() {

    this.style.backgroundColor="blueviolet";

    for (i = 0; i < q4.length; i++) {
        q4[i].style.display = "none";
      }
      for (i = 0; i < q5.length; i++) {
        q5[i].style.display = "block";
      }
}




const i5 = document.getElementsByClassName("incorrect5");
const c5 = document.getElementById("correct5");

c5.addEventListener("mouseup", shoes);
c5.addEventListener("mouseup", toGameOver);


for (i = 0; i <i5.length;i++){
    i5[i].addEventListener("mouseup", shoes);
    i5[i].addEventListener("mouseup", toGameOver);
    i5[i].addEventListener("mousedown", minusPoints);
    
}
function shoes(){
    clearInterval(timerInterval);
}

function toGameOver() {

    this.style.backgroundColor="blueviolet";

    for (i = 0; i < q5.length; i++) {
        q5[i].style.display = "none";
      }
      for (i = 0; i < GameOver.length; i++) {
        GameOver[i].style.display = "block";
      }
      document.getElementById("finalScore").textContent= "Your final score is " + secondsLeft;
}

const submit = document.getElementById("submit");
submit.addEventListener("mouseup", addHS);



function addHS(){

    

    for (i = 0; i < GameOver.length; i++) {
        GameOver[i].style.display = "none";
      }
      for (i = 0; i < highScores.length; i++) {
        highScores[i].style.display = "block";
      }

   
    const lineBreak = document.createElement("br");
    initials = document.getElementById("initials").value;
    document.getElementById("HSList").append(initials + " - " + secondsLeft );
    document.getElementById("HSList").appendChild(lineBreak);

 
}

function minusPoints(){
    secondsLeft -= 10;
}

function restart() {

    for (i = 0; i < start.length; i++) {
        start[i].style.display = "block";
      }
      for (i = 0; i < highScores.length; i++) {
        highScores[i].style.display = "none";
      }
  

}


