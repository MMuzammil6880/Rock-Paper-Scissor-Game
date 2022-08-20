

const totalScore = { playerScore : 0 , computerScore : 0 }


function getComputerChoice() {
     let ChoiceOfComputer = ['Rock' , 'Paper' , 'Scissors']
     let randomChoice = Math.floor(Math.random()*3)
     return ChoiceOfComputer[randomChoice]
}



function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score
    // human draws - getResult('Rock', 'Rock') => 0
  if(playerChoice == computerChoice){
    score = 0
  }
  // human wons - getResult('Rock', 'Scissors') => 1
  else if(playerChoice == 'Rock'  && computerChoice == 'Scissors'){
    score = 1
  }
  else if(playerChoice == 'Scissors'  && computerChoice == 'Paper'){
    score = 1
  }
  else if(playerChoice == 'Paper'  && computerChoice == 'Rock'){
    score = 1
  }
  // human loses - getResult('Scissors', 'Rock') =>  -1
  else{
    score = -1
    }
  

  return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let playerScore = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')

  if(score == 1){
    resultDiv.innerText = "You Won"
    }
  else if (score == -1){
    resultDiv.innerText = "You Lose"
  }
  else{
    resultDiv.innerText = "It's Tie"
  }
  playerScore.innerHTML = `Your Score: ${totalScore['playerScore']} , Computer Score: ${totalScore['computerScore']}`
  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score =  getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    totalScore['computerScore'] += (-1 *score)
    console.log()

    showResult(score, playerChoice, computerChoice)

  
}


function playGame() {
  // use querySelector to select all RPS Buttons
  const RPSbuttons = document.querySelectorAll('.rpsButton')

  
    RPSbuttons.forEach(RPSbutton => {
      RPSbutton.onclick = () => onClickRPS(RPSbutton.value)
    })
 

  // Click listener to the end game button that runs the endGame() function on click
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  endGameButton.ondblclick = () => finishGame()

  
}
const finalResult = () =>{
  let resultDiv = document.getElementById('hands')
  if(totalScore['playerScore'] > totalScore['computerScore'] ){
    resultDiv.innerText = 'You Won This Game'
  }
  else if(totalScore['playerScore'] < totalScore['computerScore']){
    resultDiv.innerText = 'You Lose This Game'
  }
  else{
    resultDiv.innerText = "It's Tie Game"  
  }
}
// ** endGame function clears all the text on the DOM And it's also show the result on the behave of total score **
function endGame() {
  let playerScore = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')
  playerScore.innerText = ' '
  handsDiv.innerText = ' '
  resultDiv.innerText = ' '
  finalResult() 

  totalScore['playerScore']   = 0
  totalScore['computerScore'] = 0
  
}
function finishGame() {
  let playerScore = document.getElementById('player-score')
  let handsDiv = document.getElementById('hands')
  let resultDiv = document.getElementById('result')
  playerScore.innerText = ' '
  handsDiv.innerText = ' '
  resultDiv.innerText = ' '

  totalScore['playerScore']   = 0
  totalScore['computerScore'] = 0
  
}


playGame()