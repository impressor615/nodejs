import alt from '../alt';
import TestActions from '../actions/TestActions';


class TestStore {
  constructor() {
    this.bindActions(TestActions);
    this.result = ''; 
    this.choice = '';
  }

  onReportSuccess(data) {
    this.result = data; 
  }

	onUpdateChoice(event) {
		this.choice = event.target.value;
	}

	onDecideWhoWinsSuccess(result) {
		this.result = result;
	}
}


export default alt.createStore(TestStore); 
