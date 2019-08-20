import React ,{ Component }from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link, WrapMainContent } from 'react-router-dom'
import Start from './Start'

class App extends Component{
  constructor(){
      super();
      this.state = {
        deckName : "tora"
      };
      this.getData = this.getData.bind(this);
  }
 getData(){
   console.log("stateって変わったの？");
  axios
    .get('http://127.0.0.1:8000/Play/Deck',{ params: {deckName: this.state.deckName}})
    .then((results) => {
    // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
      const deck = results.data;


      this.setState({
        deck
      });
      console.log(results);
    },
    )
    .catch(err => {
      console.log(err);
    });
  }

render(){

console.log(this.state.deck);
  return (
    <Switch>
  {/* URLでマッチさせたい要素を書いていく */}
  {/* component={Home}とかでもOK。今回はWrapMainContentでラッパーしている。詳細後述。 */}
  {/* exactを入れることで厳密なURL比較が可能に */}
  <Route exact path="/Start" component={Start} />} />
  <Route exact path="/" component={Start} />} />
  {/* URLヒットしないときはNot Found画面を表示する */}

    </Switch>

  );
 }
}

export default App;
