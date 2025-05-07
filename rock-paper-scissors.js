let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "gray";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if(userChoice === compChoice) {
    //draw game 
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock") {
        //scissors, paper
        compChoice === "paper" ? false : true;       
    } else if(userChoice === "paper") {
        //rock,scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
       //rock, paper
       userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});


// Reset game logic here
/*let button = document.getElementById("reset-button");
button.addEventListener("click", ()=>{
  document.querySelector(".score");
 })
*/   
let button = document.createElement("button"); // Create a new button element
button.id = "reset-button"; // Set the button's ID
button.innerText = "Reset Game"; // Set the button's text
document.body.appendChild(button); // Append the button to the body (or any desired container)

// Add event listener to reset the game
button.addEventListener("click", () => {
  // Reset scores
  userScore = 0;
  compScore = 0;

  // Update the score display
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#081b31";
});