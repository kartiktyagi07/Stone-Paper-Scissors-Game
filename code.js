let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const displayMsg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const showWinner= (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        displayMsg.innerText="You Win";
        displayMsg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        displayMsg.innerText="You lose";
        displayMsg.style.backgroundColor="red";
    }
}

const drawGame = () =>{
    displayMsg.innerText="It was a Draw. Play again";
    displayMsg.style.backgroundColor="rgba(31, 74, 204, 0.835)";
}

const gameChoice=()=>{
    const options=["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

const playGame = (userChoice) => {
    const compChoice=gameChoice();
    if(userChoice === compChoice){
        // it was a draw
        drawGame();
    }else{
        userWin=true;
        if(userChoice === "rock"){
            // papaer or scissor
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice === "paper"){
            // rock or scissor
            userWin = compChoice==="rock"?true:false;
        }else{
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});