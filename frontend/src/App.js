import React ,{ Component }from 'react';
import './App.css';
import axios from 'axios';
import { withRouter,Switch, Route, Link, WrapMainContent } from 'react-router-dom'
import Start from './Start'
import DecisionPage from './DecisionPage'

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
    // 取得したデッキデータをコピーしてsetstateする
      const deckGroup_copy = this.state.deckGroup.slice();
      deckGroup_copy[this.state.registerNo] = deck
      if(this.state.playernum > this.state.registerNo){
      this.setState({
        deckGroup: deckGroup_copy,
        registerNo: this.state.registerNo + 1
      });
    }else {this.props.history.push('/DecisionPage')}

      console.log(this.state.deckGroup);
    },
    )
    .catch(err => {
      console.log(err);
    });
  }

  selectPlayerNum = (e) =>{
    this.setState({playernum: e})
    console.log(this.state.playernum);
    this.props.history.push('/DecisionPage')
  };

render(){
console.log(this.state.deck);
console.log(this.state.playernum);
  return (
    <Switch>
  {/* URLでマッチさせたい要素を書いていく */}
  {/* component={Home}とかでもOK。今回はWrapMainContentでラッパーしている。詳細後述。 */}
  {/* exactを入れることで厳密なURL比較が可能に */}
  <Route exact path="/" render={() => <Start getPlayerNum={this.selectPlayerNum}/>} />
  <Route exact path="/DecisionPage"  render={() => <DecisionPage playernum= {this.state.playernum} getDeck= {this.getData}/>} /> />} />
  {/* URLヒットしないときはNot Found画面を表示する */}
    </Switch>

  );
 }
}

export default withRouter(App);
