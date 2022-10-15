let computerScore = 1;
let userScore = 1;
const uScore = document.getElementById('userScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('start');
const text2 = document.getElementById('gameStart');

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           if(showIcon.className === computerShowIcon.className){
               uScore.innerHTML = uScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Draw &#128543! ";
               text.style.color = '#F4D03F';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#F4D03F';
           } 
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               uScore.innerHTML = userScore;
               userScore++;
               text.innerHTML = "You beat the Computer! ! &#128515";
               text.style.color = '#28B463';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#28B463';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Computer beats You ! &#128545";
               text.style.color = '#E74C3C';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#E74C3C';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Computer beats You ! &#128545";
               text.style.color = '#E74C3C';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#E74C3C';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               uScore.innerHTML = userScore;
               userScore++;
               text.innerHTML = "You beat the Computer ! &#128515";
               text.style.color = '#28B463';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#28B463';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Computer beats You ! &#128545";
               text.style.color = '#E74C3C';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#E74C3C';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               uScore.innerHTML = userScore;
               userScore++;
               text.innerHTML = "You beat the Computer ! &#128515";
               text.style.color = '#28B463';
               text2.innerHTML = text.innerHTML;
               text2.style.color = '#28B463';
           }
        });
    });
}
game();
