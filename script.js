// Selecting each sound button
const sound1 = document.querySelector(".s1");
const sound2 = document.querySelector(".s2");
const sound3 = document.querySelector(".s3");
const sound4 = document.querySelector(".s4");
const sound5 = document.querySelector(".s5");
const sound6 = document.querySelector(".s6");
const sound7 = document.querySelector(".s7");
const sound8 = document.querySelector(".s8");
const sound9 = document.querySelector(".s9");
const sound10 = document.querySelector(".s10");
const sound11 = document.querySelector(".s11");
const sound12 = document.querySelector(".s12");
const sound13 = document.querySelector(".s13");
const sound14 = document.querySelector(".s14");
const sound15 = document.querySelector(".s15");

// Assigning sound files to variables
const a1 = new Audio("sounds/small-dog-barking-84707.mp3");
const a2 = new Audio("sounds/cat-89108.mp3");
const a3 = new Audio("sounds/animals-buffalo-sound-232390.mp3");
const a4 = new Audio("sounds/cow-8815.mp3");
const a5 = new Audio("sounds/snake-hissing-6092.mp3");
const a6 = new Audio("sounds/horse-neigh-261131.mp3");
const a7 = new Audio("sounds/owls-241046.mp3");
const a8 = new Audio("sounds/small-dog-barking-84707.mp3");
const a9 = new Audio("sounds/sheep-bleating-223324.mp3");
const a10 = new Audio("sounds/lion-roar-6011.mp3");
const a11 = new Audio("sounds/frog-in-the-morning-244785.mp3");
const a12 = new Audio("sounds/hungry-cat-254850.mp3");
const a13 = new Audio("sounds/elephant-225994.mp3");
const a14 = new Audio("sounds/lumba-lumba-220055.mp3");
const a15 = new Audio("sounds/birds-and-animals-before-sunrise-246785.mp3");

// Function to stop all sounds and reset play/pause buttons
function stopAllSounds() {
  const sounds = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15];
  const buttons = document.querySelectorAll(".play-btn");

  sounds.forEach(sound => sound.pause());
  buttons.forEach(button => button.classList.remove("playing"));
  buttons.forEach(button => button.classList.add("paused"));
}

// Function to handle play/pause toggle
function toggleSound(sound, button) {
  if (button.classList.contains("playing")) {
    // If it's already playing, pause the sound
    sound.pause();
    button.classList.remove("playing");
    button.classList.add("paused");
  } else {
    // Stop all other sounds before playing the new one
    stopAllSounds();
    
    // Play the sound and change button to paused state
    sound.play();
    button.classList.remove("paused");
    button.classList.add("playing");
  }
}

// Adding click event listeners to each button
sound1.addEventListener("click", () => toggleSound(a1, sound1));
sound2.addEventListener("click", () => toggleSound(a2, sound2));
sound3.addEventListener("click", () => toggleSound(a3, sound3));
sound4.addEventListener("click", () => toggleSound(a4, sound4));
sound5.addEventListener("click", () => toggleSound(a5, sound5));
sound6.addEventListener("click", () => toggleSound(a6, sound6));
sound7.addEventListener("click", () => toggleSound(a7, sound7));
sound8.addEventListener("click", () => toggleSound(a8, sound8));
sound9.addEventListener("click", () => toggleSound(a9, sound9));
sound10.addEventListener("click", () => toggleSound(a10, sound10));
sound11.addEventListener("click", () => toggleSound(a11, sound11));
sound12.addEventListener("click", () => toggleSound(a12, sound12));
sound13.addEventListener("click", () => toggleSound(a13, sound13));
sound14.addEventListener("click", () => toggleSound(a14, sound14));
sound15.addEventListener("click", () => toggleSound(a15, sound15));