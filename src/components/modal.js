import React from "react";
import { observer } from "mobx-react";
import store from "../store";

class Modal extends React.Component {

    render(props) {

        let { modalState, setModal, modalCard, clearModalCard } = store;

        function hideModal() {
            setModal(false);
            clearModalCard();
        }

        return (
            <div className={`modal-wrap ${ modalState ? 'active' : ''}`}>

                <form className="modal-body" onSubmit={ event => { event.preventDefault(); console.log('Submit') }}>
                    <span className="close transition" onClick={ hideModal }>&times;</span>
                    { modalCard.map( (item, index) => {
                        return (
                            <div className="oneItem text-center" key={ index }>
                                <p className="category">{ item.category }</p>
                                <p className="name">{ item.name }</p>
                                <p className="price"><sup>$</sup>{ item.price }</p>
                            </div>
                        )
                    })}
                    <label>
                        <input type="text"/>
                    </label>
                    <label>
                        <input type="tel"/>
                    </label>
                    <button className="btn btn-default submitBtn uppercase" type="submit">Order</button>
                </form>

            </div>
        );
    }
}

export default observer(Modal);