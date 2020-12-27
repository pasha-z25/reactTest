import React from "react";
import { observer } from "mobx-react";
import store from "../store";
import FormGroup from "./form/FormGroup";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: "",
            nameErrors: [],
            numberErrors: []
        }
    }

    validateName = () => {
        if (this.state.name.trim() === '') {
            this.state.nameErrors.push('This field in required')
        }
        if ( !(/^[a-zA-Zа-яА-Я]*$/.test(this.state.name)) && this.state.name.length ) {
            this.state.nameErrors.push('Only letters allowed')
        }
    }

    validateNumber = () => {
        if (this.state.number.trim() === '') {
            this.state.numberErrors.push('This field in required')
        }
        if ( !(/^[0-9]*$/.test(this.state.number)) && this.state.number.length ) {
            this.state.numberErrors.push('Only numbers allowed')
        }
        if (this.state.number.length !== 12) {
            this.state.numberErrors.push('Should contain 12 characters')
        }
    }

    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    clearErrors = (e) => {
        const name = e.target.name;
        console.log('focus ' + name )
        if (name === 'name') {
            this.setState({ nameErrors: []})
        }
        if (name === 'number') {
            this.setState({ numberErrors: []})
        }
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
                            <div className="oneItem modal-item text-center" key={ index }>
                                <p className="category uppercase">{ item.category }</p>
                                <p className="name capitalize">{ item.name }</p>
                                <p className="price"><sup>$</sup>{ item.price }</p>
                            </div>
                        )
                    })}

                    <FormGroup type={"text"} name={"name"} placeholder={"Name"}
                               value={this.state.name}
                               onError={this.state.nameErrors}
                               onChange={ this.onInputChange }
                               onBlur={ this.validateName }
                               onFocus={ this.clearErrors }
                    />

                    <FormGroup type={"tel"} name={"number"} placeholder={"Number"}
                               value={this.state.number}
                               onError={this.state.numberErrors}
                               onChange={ this.onInputChange }
                               onBlur={ this.validateNumber }
                               onFocus={ this.clearErrors }
                    />

                    <span className="w-100">{` ${this.state.name} and ${this.state.number} `}</span>

                    <div className="text-center">
                        <button className="btn btn-default w-100 submitBtn uppercase" type="submit">Order</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default observer(Modal);