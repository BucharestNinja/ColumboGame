import React from 'react';
import { Button} from 'react-bootstrap';

export default class Start extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
}

  handleChange (e) {
    this.setState({value: e.target.value})
    console.log(this.state.value)
}


  render() {
    return (
      <div>
      <input className="form-control" type="number"  min="0" max="9" value={this.state.value} onChange={this.handleChange} ></input>
      <Button onClick={() =>this.props.getPlayerNum(this.state.value)}>決定</Button>
      </div>

    )
  }
}
