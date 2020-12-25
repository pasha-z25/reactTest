import React from "react";
import { observer } from "mobx-react";
import store from "../store";

class Modal extends React.Component {

    render(props) {

        let { modalState, setModal } = store;

        function hideModal() {
            setModal(false);
        }

        return (
            <div className={`modal-wrap ${ modalState ? 'active' : ''}`}>
                <form className="modal-body" onSubmit={ event => { event.preventDefault(); console.log('Submit') }}>
                    <p>Title</p>
                    <p>
                        <label>
                            <input type="text"/>
                        </label>
                    </p>
                    <p>
                        <button onClick={ hideModal }>Hide Modal</button>
                    </p>
                </form>

            </div>
        );
    }
}

export default observer(Modal);