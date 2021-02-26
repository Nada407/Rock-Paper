const game = () =>
  // we use const , buz the var will not change
  {
    let pScore = 0; // var that will change  // its also represnt the player score
    let cScore = 0; // var that will change  // its also represnt the computer score

    //This function is to start the game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };

    //play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      // computer OPtions
      const computerOptions = ["rock", "paper", "scissors"];

      options.forEach(option => {
        option.addEventListener("click", function () {
          //computer choice
          const computerNumber = Math.floor(Math.random() * 3); // Math.floor make the random numbers integer
          const computerChoice = computerOptions[computerNumber];
          // Here is where we call compare hands
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        });
      });
    };
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
      // to update text
      const winner = document.querySelector(".winner");
      // checking for the tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Its a tie";
        return;
      }
      // checking for the rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Win";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "computer wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //check for the paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //check for the Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };

    startGame();
    playMatch();
  };
// start the game function
game();
