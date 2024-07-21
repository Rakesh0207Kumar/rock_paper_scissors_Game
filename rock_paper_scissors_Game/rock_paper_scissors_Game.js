let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score_Board = document.querySelector("#user-score");
const comp_Score_Board = document.querySelector("#computer-score");

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game Was Draw , Play Again ! ";
    msg.style.backgroundColor = "#210124";

}

let showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        user_Score_Board.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp_Score_Board.innerText = compScore;
        // console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) =>{
    // console.log("user choice = " , userChoice);
    const compChoice = genCompChoice();
    // console.log("Computer choice = " , compChoice);


    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // remaining option = [ "paper" , " scissors"]
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            // remaining option = [ "rock" , " scissors"]
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // remaining option = [ "rock" , " paper"]
            userChoice = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice , compChoice);
    }


}

const genCompChoice = () => {
    const option = ["rock" , "paper" , "scissor"];
    const rendomIdx = Math.floor(Math.random() * 3) ;
    return option[rendomIdx];
    
}

choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked ." , userChoice);
        playGame(userChoice);
    });
});


