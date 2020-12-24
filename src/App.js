import React from "react";
import store from "./store";
import { observer } from "mobx-react";

function App() {
  // const store = new Store();
  const { cards, setCardsData } = store;
  function getData() {
    console.log('work');
    console.log(cards);
    setCardsData();
  }
  return (
    <div className="App" style={{padding: "25px", textAlign: "center"}}>
      <button onClick={ getData }>Get</button>
    </div>
  );
}

export default observer(App);
