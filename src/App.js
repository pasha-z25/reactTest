import React from "react";
import store from "./store";
import { observer } from "mobx-react";
import Card from './components/Card';
import Modal from './components/Modal';

class App extends React.Component {

  componentDidMount() {
    store.getDataFromApi();
  }

  getMinValue = () => {
    let min = store.cards.reduce((min, item) => item.price < min ? item.price : min, store.cards[0].price);
    let card = store.cards.filter( item => item.price === min );
    return card[0];
  }

  buyCheapest = () => {
    let { setModal, addCardToModal } = store;

    addCardToModal(this.getMinValue());
    setModal(true);
  }

  render() {
    const styles = {
      app: {
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '40px 15px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      btn: {
        marginTop: '40px',
      }
    }

    return(
      <div className="App" style={styles.app}>
        { store.cards.map( (oneCard, index) => {
          return <Card oneCard={ oneCard } key={ index }/>
        })}
        <div className="text-center w-100">
          <button className="btn btn-default wide" onClick={ this.buyCheapest } style={styles.btn}>Buy cheapest</button>
        </div>
        <Modal />
      </div>
    )
  }
}

export default observer(App);