import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Life Game</h1>
                <p>{this.props.count}</p>
            </div>
        );
    }
}

export default Header;