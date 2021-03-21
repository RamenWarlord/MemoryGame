/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
//global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 3, 4, 5, 6, 7, 8];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikeCounter = 3;
var timerInterval;
var totalTime = 180;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikeCounter = 3;
  totalTime = 180;
  timerInterval = setInterval(countDown, 1000);
  pattern = new Array(8);
  generateRandomPattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("strikeContainer").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  resetTimer();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("strikeContainer").classList.add("hidden")
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  if(clueHoldTime > 100){
    clueHoldTime -= 150;
  }
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function countDown(){
  totalTime--;
  document.getElementById("time").innerHTML = totalTime;
  if(totalTime == 0){
    loseGame();
  }
}

function resetTimer(){
  clearInterval(timerInterval);
  document.getElementById("time").innerHTML = 180;
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(btn==pattern[guessCounter])
  {
    if(guessCounter==progress)
    {
      if(progress==pattern.length - 1)
        winGame();
      else{
        progress++;
        playClueSequence();
      }
    }
    else
    {
      guessCounter++;
    }
  }
  else{
    strikeCounter--;
    document.getElementById("strikes").innerHTML = strikeCounter;
    if(strikeCounter == 0)
      loseGame();
    else
      playClueSequence();
  }
}

function generateRandomPattern(){
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * 8 + 1);
    console.log(pattern);
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You win!");
}
// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 320,
  4: 350,
  5: 400,
  6: 420,
  7: 450,
  8: 475
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
