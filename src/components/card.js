import React from "react";
import store from '../store';
import { observer } from "mobx-react";

class Card extends React.Component {

    render(props) {
        let oneCard = this.props.oneCard
        let { cards, setModal, addCardToModal } = store;

        function getCurrentCard() {
            let current = cards.filter( item => item.name === oneCard.name);
            return current[0];
        }

        function buyThisCard () {
            addCardToModal(getCurrentCard());
            setModal(true);
        }

        return (
            <div className="card transition" onClick={ buyThisCard }>
                <p>{ oneCard.category }</p>
                <p>{ oneCard.name }</p>
                <p><sup>$</sup>{ oneCard.price }</p>
                <button className="btn uppercase">Buy</button>
            </div>
        );
    }
}

export default observer(Card);