function computerPlay() {
	const computerChoice = Math.floor(Math.random() * 3);
	switch (computerChoice) {
		case 0:
			return 'Rock';
		case 1:
			return 'Paper';
		case 2:
			return 'Scissors';
	}
}

function playRound(playerSelection, computerSelection) {
  properPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  console.log(`Player selection: ${properPlayerSelection}. Computer selection: ${computerSelection}.`);
	if (properPlayerSelection === computerSelection) {
		return `Draw! Both players played ${properPlayerSelection}`;
	} else if (
		(properPlayerSelection === 'Rock' && computerSelection === 'Scissors') ||
		(properPlayerSelection === 'Paper' && computerSelection === 'Rock') ||
		(properPlayerSelection === 'Scissors' && computerSelection === 'Paper')
	) {
		return `You Win! ${properPlayerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${properPlayerSelection}`;
  }
}

function game(playerChoice) {
  console.log(playRound(playerChoice, computerPlay()));
}