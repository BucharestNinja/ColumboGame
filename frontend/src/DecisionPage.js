import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

export default class Start extends React.Component {
  constructor (props) {
    super(props)
    this.state = {deckName: ''}
    this.handleChange = this.handleChange.bind(this)
    const decks = [];
  }

  handleChange (e) {
    this.setState({deckName: e.target.value})
    console.log(this.state.deckName)
    // TODO 空欄のままボタンを押すと全てのデータを抽出してしまうので後日要修正
  }

  render(){
    return(
      <div>

      <input className="form-control" type="text" value={this.state.deckName} onChange={this.handleChange} ></input>
      <Button onClick={() =>this.props.getDeck(this.state.deckName)}>デッキ登録</Button>
      </div>
    )
  }
}
