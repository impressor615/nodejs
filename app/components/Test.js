import React from 'react';
import TestStore from '../stores/TestStore';
import TestActions from '../actions/TestActions';


class Test extends React.Component {
  constructor(props) {
		super(props);
		this.state = TestStore.getState();
		this.onChange = this.onChange.bind(this); 
	}

	componentDidMount() { // After rendering the DOM
		TestStore.listen(this.onChange);
	}

	componentWillUnmount() { // Before Unmounting the DOM
		TestStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();
		const choice = this.state.choice;
		TestActions.decideWhoWins(choice);
	}


	render() {
		return (
			<div>
				<div>This is the competition</div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className='form-group '>
						<div className='radio radio-inline'>
							<input type='radio' name='Choice' id='Rock' value='Rock' checked={this.state.choice === 'Rock'}
										 onChange={TestActions.updateChoice}/>
							<label htmlFor='Rock'>Rock</label>
						</div>
						<div className='radio radio-inline'>
							<input type='radio' name='Choice' id='Paper' value='Paper' checked={this.state.choice === 'Paper'}
										 onChange={TestActions.updateChoice}/>
							<label htmlFor='Paper'>Paper</label>
						</div>
						<div className='radio radio-inline'>
							<input type='radio' name='Choice' id='Scissors' value='Scissors' checked={this.state.choice === 'Scissors'}
										 onChange={TestActions.updateChoice}/>
							<label htmlFor='Scissors'>Scissors</label>
						</div>
					</div>
					<button type='submit' className='btn btn-primary'>도전</button>
				</form>
        {this.state.result}
      </div>
		)
	}
}

export default Test;
