import React from "react";
import { observer } from "mobx-react";

class Card extends React.Component {

    render(props) {
        let oneCard = this.props.oneCard

        return (
            <div className={"card"}>
                <p>{ oneCard.category }</p>
                <p>{ oneCard.name }</p>
                <p>{ oneCard.price }</p>
            </div>
        );
    }
}

export default observer(Card);