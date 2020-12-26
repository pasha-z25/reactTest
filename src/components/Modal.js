import React from "react";
import { observer } from "mobx-react";
import store from "../store";
import FormGroup from "./form/FormGroup";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: "chmj",
            name: "",
            number: ""
        }
    }

    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    validateForm = () => {
        return true;
    }

    submitForm = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            console.log('Success')
        } else {
            console.log('No valid')
        }
    }

    hideModal = () => {
        store.setModal(false);
        store.clearModalCard();
    }

    render() {

        let { modalState,  modalCard } = store;

        return (
            <div className={`modal-wrap ${ modalState ? 'active' : ''}`}>
                <form className="modal-body" onSubmit={ this.submitForm }>
                    <span className="close transition" onClick={ this.hideModal }>&times;</span>
                    { modalCard.map( (item, index) => {
                        return (
                            <div className="oneItem text-center" key={ index }>
                                <p className="category">{ item.category }</p>
                                <p className="name">{ item.name }</p>
                                <p className="price"><sup>$</sup>{ item.price }</p>
                            </div>
                        )
                    })}

                    <FormGroup type={"text"} name={"name"} value={this.state.name} onChange={ this.onInputChange } />
                    <FormGroup type={"tel"} name={"number"} value={this.state.number} onChange={ this.onInputChange } />
                    <span>{`Name: ${this.state.name}, number: ${this.state.number}, ${this.state.names}`}</span>
                    <button className="btn btn-default submitBtn uppercase" type="submit">Order</button>
                </form>
            </div>
        );
    }
}

export default observer(Modal);