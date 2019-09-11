import React ,{ Component }from 'react';
import './App.css';
import axios from 'axios';
import { withRouter,Switch, Route } from 'react-router-dom'
import Start from './Start'
import DecisionPage from './DecisionPage'
import GamePage from './GamePage'

class App extends Component{
  constructor(){
      super();
      this.getData = this.getData.bind(this);
      this.state = {
        registerNo : 0,
        deckGroup : []
      }
      console.log(this.state.playerDeck);
  }

  getData = (name) =>{
   console.log("stateって変わったの？");
   axios
    .get('http://127.0.0.1:8000/Play/Deck',{ params: {deckName: name}})
    .then((results) => {
    // APIからデッキデータを取得
      const deck = results.data;
      console.log(name);
    // 取得したデッキデータをコピーしてsetstateする
      const deckGroup_copy = this.state.deckGroup.slice();
      deckGroup_copy[this.state.registerNo] = deck
    // プレイヤーの人数分だけデッキを登録する
      if(this.state.playernum > this.state.registerNo){
      this.setState({
        deckGroup: deckGroup_copy,
        registerNo: this.state.registerNo + 1
      });
    // 人数を超えたらゲーム本編に遷移する
  }if(this.state.playernum == this.state.registerNo){this.props.history.push('/GamePage')}
      console.log(this.state.deckGroup[1][0]['id']);
    },
    )
    .catch(err => {
      console.log(err);
    });
  }

  selectPlayerNum = (e) =>{
    // プレイヤー数をデッキ選択ページヘ渡して遷移する
    this.setState({playernum: e})
    console.log(this.state.playernum);
    this.props.history.push('/DecisionPage')
  };

render(){
console.log(this.state.deck);
console.log(this.state.playernum);
  return (
    <Switch>
  <Route exact path="/" render={() => <Start getPlayerNum={this.selectPlayerNum}/>} />
  <Route exact path="/DecisionPage"  render={() => <DecisionPage playernum= {this.state.playernum} getDeck= {this.getData}/>} /> />} />
  <Route exact path="/GamePage" render={() => <GamePage playersDeck={this.state.deckGroup} playerNum= {this.state.playernum}/>} />
    </Switch>

  );
 }
}

export default withRouter(App);
