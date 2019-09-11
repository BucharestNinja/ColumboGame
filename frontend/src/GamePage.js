import React from 'react';
import { Button} from 'react-bootstrap';

export default class GamePage extends React.Component {
  constructor (props) {
    super(props)
    console.log("props.playersDeck[0]['id'] : ", this.props.playersDeck[1]['deckName'])
    console.log(this.props.playersDeck[0])
    this.state = {
      nowPlayer : 0,
      playersDeck : this.props.playersDeck,
      hand: []
    }
    this.cardNo =[];
    this.drawCount = 0;
    for(let i =0; i<this.props.playerNum; i++){
      //　プレイヤー人数分だけ１～１５までの数字の配列を生成してそれぞれシャッフルする
      this.cardNo[i]=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
      let n = this.cardNo[i].length;
      let temp, j;
      while (n) {
          j = Math.floor(Math.random() * n--);
          temp = this.cardNo[i][n];
          this.cardNo[i][n] = this.cardNo[i][j];
          this.cardNo[i][j] = temp;
      }
      console.log(this.cardNo[i])
    };
  }

  PlayerChange(){
    const hand_copy = this.state.hand.slice()
    hand_copy.splice();
    this.setState({hand:hand_copy})

    this.drawCount =0
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
    this.setState({hand: this.state.hand.concat(this.state.playersDeck[this.state.nowPlayer][0]['card'+this.cardNo[this.state.nowPlayer][this.drawCount]])})
    console.log(this.state.hand)
    this.drawCount = this.drawCount+1
    this.cardNo.splice(0,this.drawCount)
    console.log(this.cardNo[0])

  }

  renderCards(){
    let rows = this.state.hand.map((card,index) =>
  <tr key={card}>
    <td>
      {index + 1}
    </td>
    <td>{card}</td>
  </tr>
);

  return (
  <table border='1' cellSpacing='0'>
     <thead>
        <tr>
           <th>Number</th>
           <th>card</th>
        </tr>
     </thead>
     <tbody>
       {rows}
     </tbody>
  </table>
)
}

  render(){
    console.log(this.state.nowPlayer)
    return(
      <div>
        <p>{this.renderCards()}</p>
        <p>現在のプレイヤー：{this.state.playersDeck[this.state.nowPlayer][0]['deckName']}</p>
        <Button onClick={() =>this.PlayerChange()}>次のプレイヤー</Button>
        <Button onClick={() =>this.drawCard()}>ドロー</Button>
        <p><textarea name="title" rows="10" cols="40">ここにタイトルを記入してください。</textarea></p>
      </div>
      )
  }
}
