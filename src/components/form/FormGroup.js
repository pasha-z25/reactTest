import React from "react";
import { observer } from "mobx-react";

class FormGroup extends React.Component {

    render(props) {

        return (
            <label className={`form-group ${ this.props.onError.length ? 'error' : '' }`}>

                <span className="clear">&times;</span>
                <input
                    className="input"
                    type={this.props.type || 'text'}
                    name={this.props.name || 'name'}
                    placeholder={this.props.placeholder || ''}
                    value={this.props.value || ''}
                    onChange={ this.props.onChange }
                    onBlur={ this.props.onBlur }
                    onFocus={ this.props.onFocus }
                />
                <span className="warning" style={{ textAlign: 'left' }}>
                 { this.props.onError.map( (item, index) => {
                     return (
                         <span key={index}>{ item }<br/></span>
                     )
                 })}
                </span>
            </label>
        );
    }
}

export default observer(FormGroup);