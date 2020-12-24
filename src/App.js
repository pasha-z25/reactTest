import React from "react";
import store from "./store";
import { observer } from "mobx-react";

function App() {
  const { cards, setCardsData, getCardsLength } = store;
  function getData() {
    console.log('work');
    console.log(cards);
    setCardsData();
  }
  function getLength() {
    console.log(getCardsLength);
  }
  return (
    <div className="App" style={{padding: "25px", textAlign: "center"}}>
      <button onClick={ getData }>Get</button>
      <span onClick={ getLength }>1235</span>
    </div>
  );
}

export default observer(App);
