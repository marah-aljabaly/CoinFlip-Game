
const score = {win: 0, lose: 0}
    
//display score
updateScore();

//function to display score
function updateScore(){
  document.querySelector('.js-score').innerHTML = `wins: ${score.win}, losses: ${score.lose}`;
}

//function to run the code
function playGame(guess){
  const randomNumber = Math.random();
  let result = '';

  //computer move
  if (randomNumber < 0.5 ) {
    result = 'head';
  }
  else {
    result = 'tail';
  }

  //save score
  localStorage.getItem('score', JSON.stringify(score));

  //display result
  if (result === guess) {
    score.win++;
    document.querySelector('.js-result').innerHTML = `You win!`;
  }
  else{
    score.lose++;
    document.querySelector('.js-result').innerHTML = `You lose!`;
  }
  
  //display your choice
  document.querySelector('.js-your-choice').innerHTML = `You chose: ${guess} - Computer chose: ${result}`;

  //display score
  updateScore();
}

document.querySelector('js-reSet').cl