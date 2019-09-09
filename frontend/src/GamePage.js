import React from 'react';
import { Button} from 'react-bootstrap';

export default class GamePage extends React.Component {
  constructor (props) {
    super(props)
    console.log("props.playersDeck[0]['id'] : ", this.props.playersDeck[1]['deckName'])
    console.log(this.props.playersDeck[0])
    this.state = {
      nowPlayer : 0,
      playersDeck : this.props.playersDeck
    }
    let cardNo =[];
    for(let i =0; i<this.props.playerNum; i++){
      cardNo[i]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      console.log(cardNo)
    };
  }

  PlayerChange(){
    if(this.state.nowPlayer < this.props.playerNum-1){
      this.setState({
        nowPlayer : this.state.nowPlayer+1
      });
    }else{
      this.setState({
        nowPlayer : 0
      });
    }
  }

  drawCard(){
    let no =Math.floor(Math.random() * (1 - 15)) + 1
    hand[] = state
  }

  render(){
    console.log(this.state.nowPlayer)
    return(
      <div>
        <p>{this.state.playersDeck[this.state.nowPlayer][0]['deckName']}</p>
        <p></p>
        <Button onClick={() =>this.PlayerChange()}>デッキ登録</Button>
      </div>
      )
  }
}
