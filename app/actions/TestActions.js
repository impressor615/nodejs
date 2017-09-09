import alt from '../alt';


class TestActions {
  constructor() {
    this.generateActions (
			'updateChoice',
			'decideWhoWinsSuccess',
			'decideWhoWinsFail',
    ) 
  }

	decideWhoWins(choice) {
		const machineChoice = Math.floor(Math.random() * 3);
		// 1 : rock, 2: paper, 3:scissors
		let result = '';
		if (machineChoice === 0) {
			if (choice === 'Rock') {
				result = "Tied";
			} else if (choice === 'Paper') {
				result = "You wins";
			} else {
			  result = "You loses";	
			}
		} else if (machineChoice === 1) {
			if (choice === 'Rock') {
				result = "You loses";
			} else if (choice === 'Paper') {
				result = "Tied";
			} else {
				result = "You wins";
			}
		} else {
			if (choice === 'Rock') {
				result = "You wins";
			} else if (choice==='Paper') {
				result = "You loses";
			} else {
				result = "Tied"
			}
		}
		this.actions.decideWhoWinsSuccess(result);
	}
}

export default alt.createActions(TestActions); 
