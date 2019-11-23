import React from 'react';
import { Button } from 'react-bootstrap';

// プレイヤー人数分使用するデッキを登録する
export default class DecisionPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {deckName: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({deckName: e.target.value})
    console.log(this.state.deckName)
  }

  render(){
    console.log(this.props.isSuccess)
    return(
      <div>
      <input className="form-control" type="text" value={this.state.deckName} onChange={this.handleChange} ></input>
      <Button onClick={() =>this.props.getDeck(this.state.deckName)}>デッキ登録</Button>
      <p>{this.props.isSuccess}</p>
      </div>
    )
  }
}
