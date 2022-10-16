let computerScore = 1;
let userScore = 1;
const uScore = document.getElementById('userScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const userRevealIcon = document.querySelector('.reveal i');
const computerRevealIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('start');

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           userRevealIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerRevealIcon.className = randomClasses[randomNum];

           if(userRevealIcon.className === computerRevealIcon.className){
               uScore.innerHTML = uScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Draw &#128543! ";
               text.style.color = '#F4D03F';
           } 
           else if(userRevealIcon.className === randomClasses[0] && computerRevealIcon.className === randomClasses[2]){
               uScore.innerHTML = userScore;
               userScore++;
               text.innerHTML = "You beat the Computer! ! &#128515";
               text.style.color = '#28B463';
           }else if(userRevealIcon.className === randomClasses[0] && computerRevealIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Computer beats You ! &#128545";
               text.style.color = '#E74C3C';
           }else if(userRevealIcon.className === randomClasses[1] && computerRevealIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Computer beats You ! &#128545";
               text.style.color = '#E74C3C';
           }else if(userRevealIcon.className === randomClasses[1] && computerRevealIcon.className === randomClasses[0]){
               uScore.innerHTML = userScore;
               userScore++;
               text.innerHTML = "You beat the Computer ! &#128515";
               text.style.color = '#28B463';
           }else if(userRevealIcon.className === randomClasses[2] && computerRevealIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Computer beats You ! &#128545";
               text.style.color = '#E74C3C';
           }else if(userRevealIcon.className === randomClasses[2] && computerRevealIcon.className === randomClasses[1]){
               uScore.innerHTML = userScore;
               userScore++;
               text.innerHTML = "You beat the Computer ! &#128515";
               text.style.color = '#28B463';
           }
        });
    });
}
game();
