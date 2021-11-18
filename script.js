const player0=document.querySelector(".player--0");
const player1=document.querySelector(".player--1");
const score0E1=document.querySelector("#score--0");
const score1E1=document.getElementById("score--1");
const diceE1=document.querySelector(".dice");
const currentScPlayer0=document.getElementById("current--0");
const currentScPlayer1=document.getElementById("current--1");

const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold")
const btnNew=document.querySelector(".btn--new");

score0E1.textContent=0;
score1E1.textContent=0;

let currentScore,activePlayer,score,playing;



function init(){
    score0E1.textContent=0;
    score1E1.textContent=0;
    activePlayer = 0 ;
    currentScore = 0 ;
    score=[0,0];
    playing=true;
    


    score0E1.textContent=0;
    score1E1.textContent=0;

    diceE1.classList.add("hidden");

    currentScPlayer0.textContent=0;
    currentScPlayer1.textContent=0;

    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");

    
};
init();


const switchPlayer=function(){
    currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
            
        activePlayer=activePlayer === 0 ? 1 : 0; 
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}



btnRoll.addEventListener('click',function(){
    
    if(playing){
        // genrate random dice roll
        const dice=Math.floor(Math.random()*6)+1;
        console.log(dice);

        // dice code
        diceE1.classList.remove('hidden');
        diceE1.src=`dice-${dice}.png`;

        // if dice is 1

        if(dice !==1){
            currentScore +=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        else{
            switchPlayer();
        }
    }
});


btnHold.addEventListener('click',function(){
    if(playing){
            // 1. add the current score to the active player.Math and display instanceof.

        score[activePlayer] +=currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer];

        // 2. check if score
        if(score[activePlayer] >=50){
            playing=false;
            
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.add("sizechange");
            btnNew.classList.add("changepattern");
            // activePlayer=activePlayer === 0 ? window.alert("player 1 win"): window.alert("player 2 win");
            activePlayer=activePlayer === 0 ? document.querySelector(`.player--${activePlayer}`).classList.add("main") : 
            document.querySelector(`.player--${activePlayer}`).classList.add("main");
            
        }
        else{
            //switch the user
            switchPlayer();
        }
    }


});

btnNew.addEventListener('click',()=>{
    
    init();
    document.querySelector(`.player--${activePlayer}`).classList.remove("sizechange");
    switchPlayer();  
    document.querySelector(`.player--${activePlayer}`).classList.remove("sizechange");
  
});


