let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choices");
const msg=document.querySelector("#container");
const uscore=document.querySelector("#you");
const cscore=document.querySelector("#comp");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);    //floor=>discards decimal values    //random=>generates random values b/w 0 and 1
    return options[randIdx];
};


const draw=()=>{
    msg.innerText="Game ends in a draw.Play again!";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        uscore.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        cscore.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //draw
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissor,rock
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}
choice.forEach((choices)=>{
    // console.log(choices);
    choices.addEventListener("click",()=>{
        let userChoice=choices.getAttribute("id");
        playGame(userChoice);
    })
})
