import React from "react";
import store from "./store";
import { observer } from "mobx-react";
import Card from './components/card';
import Modal from './components/modal';

class App extends React.Component {

  componentDidMount() {
    const { getDataFromApi } = store;
      getDataFromApi();
    }

  render() {
    const styles = {
      app: {
        maxWidth: '1190px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        display: 'flex',
        flexWrap: 'wrap'
      }
    }

    let { cards, setModal } = store;

    function showModal() {
      setModal(true);
    }

    function getMinValue() {
      let min = cards.reduce((min, item) => item.price < min ? item.price : min, cards[0].price);
      console.log(min);
      let fruit = cards.filter( item => item.price === min );
      console.log(fruit[0]);
    }

    return(
      <div className="App" style={styles.app}>
        { cards.map( (oneCard, index) => {
          return <Card oneCard={ oneCard } key={ index }/>
        })}

        <button onClick={ getMinValue }>Buy cheapest</button>
        <button onClick={ showModal }>Show Modal</button>

        <Modal/>
      </div>
    )
  }
}

export default observer(App);