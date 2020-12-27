import React from "react";
import store from '../store';
import { observer } from "mobx-react";

class Card extends React.Component {

    getCurrentCard = () => {
        let current = store.cards.filter( item => item.name === this.props.oneCard.name);
        return current[0];
    }

    buyThisCard = () => {
        let { setModal, addCardToModal } = store;

        addCardToModal(this.getCurrentCard());
        setModal(true);
    }

    render(props) {
        let oneCard = this.props.oneCard

        return (
            <div className="card transition" onClick={ this.buyThisCard }>
                <p className="category uppercase">{ oneCard.category }</p>
                <p className="name capitalize">{ oneCard.name }</p>
                <button className="btn uppercase">Buy</button>
                <p className="price"><sup>$</sup>{ oneCard.price }</p>
            </div>
        );
    }
}

export default observer(Card);