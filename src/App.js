import React from "react";
import Store from "./store";
import { observer } from "mobx-react";

function App() {
  const { getCardsLength, cards } = Store;
  function getData() {
    console.log('work');

    console.log(cards);
    console.log(getCardsLength);
  }
  return (
    <div className="App" style={{padding: "25px", textAlign: "center"}}>
      <button onClick={ getData }>Get</button>
    </div>
  );
}

export default observer(App);
