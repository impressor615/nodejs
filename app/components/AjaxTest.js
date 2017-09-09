import React from 'react';
import AjaxTestActions from '../actions/AjaxTestActions';
import AjaxTestStore from '../stores/AjaxTestStore';


class AjaxTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = AjaxTestStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AjaxTestStore.listen(this.onChange);
    AjaxTestActions.getTotalCount();
  }

  componentWillUnMount() {
    AjaxTestStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.result, this.state.count);
    const result = !this.state.result; 
    AjaxTestActions.updateData(result);
    AjaxTestActions.getTotalCount();
  }

  render() {
    return (
      <div>
        <p>I am testing ajax!!!</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <p>{ this.state.count }개</p>
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

export default AjaxTest;
