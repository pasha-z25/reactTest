import React from "react";
import { observer } from "mobx-react";

class FormGroup extends React.Component {

    render(props) {

        return (
            <label className={`form-group ${ this.props.onError ? 'error' : '' }`}>
                <span className="clear">&times;</span>
                <input
                    className="input"
                    type={this.props.type || 'text'}
                    name={this.props.name || 'name'}
                    value={this.props.value || ''}
                    onChange={ this.props.onChange || false }
                />
                <span className="warning">&nbsp;</span>
            </label>
        );
    }
}

export default observer(FormGroup);