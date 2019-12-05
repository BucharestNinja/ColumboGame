import React from 'react';
import {Button} from 'react-bootstrap';

export default class DecideNumberOfPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value : ''}
    this.setPlayerNum = this.setPlayerNum.bind(this)
  }

  setPlayerNum (e) {
    //　プレイヤー人数を取得する
    this.setState({value : e.target.value})
  }


  render() {
    return (
      <div>
      <input className="form-control" type="number"  min="0" max="9" value={this.state.value} onChange={this.setPlayerNum} ></input>
      <Button bsStyle="primary" onClick={() =>this.props.getPlayerNum(this.state.value)}>決定</Button>
      </div>

    )
  }
}
