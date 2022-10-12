const pScore = document.querySelector('playerScore');
const cScore = document.querySelector('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show__player i');
const computerShowIcon = document.querySelector('.computer i');
let playerScore = 1;
let computerScore = 1;

const randomClasses = ["icon-rock.svg", "icon-paper.svg", "icon-scissors.svg"];
const text = document.getElementById('demo1');
const text2 = document.getElementById('demo2');

const game = () =>{
    buttons.forEach (btn =>{
        btn.addEventListener('click', (e)=>{
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];
            
            if(showIcon.className === computerShowIcon.className){
                playerScore.innerHTML = playerScore.innerHTML;
                computerScore.innerHTML = computerScore.innerHTML;
                text.innerHTML = "It's a Draw ! ";
                // decidir acerca da cor do texto
                text.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }else if (showIcon.className ===randomClasses [0] && computerShowIcon.className ===randomClasses[2]){
                playerScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You Win ! ";
                // decidir acerca da cor do texto
                text.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }else if(showIcon.className ===randomClasses[0] && computerShowIcon.className ===randomClasses[1]){
                computerScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed ! ";
                // decidir acerca da cor do texto
                text2.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
                computerScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed ! ";
                // decidir acerca da cor do texto
                text2.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }else if(showIcon.className ===randomClasses[1] && computerShowIcon.className === randomClasses[0]){
                playerScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You Win ! ";
                // decidir acerca da cor do texto
                text2.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }else if(showIcon.className ===randomClasses[2] && computerShowIcon.className ===randomClasses[0]){
                computerScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You loosed ! ";
                // decidir acerca da cor do texto
                text2.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
                playerScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You Win ! ";
                // decidir acerca da cor do texto
                text2.innerHTML = text.innerHTML;
                // decidir acerca da cor do texto
            }
        });
    });
}
game();
