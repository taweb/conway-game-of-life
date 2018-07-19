import React, { Component } from 'react';

class Button extends Component {
    handleClick = () => {
        this.props.onButtonClick(this.props.value)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.children}</button>
            </div>
        );
    }
}

export default Button;