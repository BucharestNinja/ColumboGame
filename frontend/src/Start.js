import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, Link } from 'react-router-dom';

export default class Start extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
}

  handleChange (e) {
    this.setState({value: e.target.value})

}
  render() {
    return (
      <div>
      <input className="form" type="text"  value={this.state.value} onChange={this.handleChange} ></input>
      <Link to="/a">Page A</Link>
      </div>

    )
  }
}
