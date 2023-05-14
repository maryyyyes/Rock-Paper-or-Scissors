console.log('hi');
const getUserChoice = userInput => {
userInput.toLowerCase()
 if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb') {
 return userInput;
 } else {
   console.log('error')
 }
}
const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random() * 2)
  switch (randomNumber) {
    case 0:

     return 'rock';

     break;
    case 1:
     return 'paper';
     break;
    case 2:
     return 'scissors';
     break;
  }
}



const determineWinner = ( userChoice, computerChoice) => {
if (userChoice === computerChoice) {
 return 'the game was a tie!'
 }
if (userChoice === 'rock') {
  if (computerChoice === 'paper')
  return 'computer won';
 } else {
  return 'User won';
 }
if (userChoice === 'paper') {
  if(computerChoice === 'scissors')
  return 'Computer won';
 } else {
   return 'User won'
  }
if (userChoice === 'scissors'){
 if (computerChoice === 'rock')
  return 'Computer won'; 
 } else {
   return 'User won';
 }
if (userChoice === 'bomb' ) {
 return 'Congratulations, you won!';
 }
}

const playGame = () => {
   const userChoice = getUserChoice('scissors');
  const computerChoice
 = getComputerChoice();
  console.log('You put ' + userChoice);
  console.log('The Computer put ' + computerChoice );
  return determineWinner(userChoice, computerChoice)
};


console.log(playGame())





