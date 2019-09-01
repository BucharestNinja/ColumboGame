import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

export default class Start extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props.playersDeck[0].id)

  }

  handleChange (e) {
    this.setState({deckName: e.target.value})
    console.log(this.state.deckName)
  }

  render(){
    return(
        <ul>
          {this.props.playersDeck.map((playerDeck,index) =>
            {<li key={index}>{playerDeck.deckName}</li>)}}
        </ul>
      )


  }
}
