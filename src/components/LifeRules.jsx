import React, { Component } from 'react';
import GridLayout from '../containers/GridLayout';

class LifeRules extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{marginRight: '10px'}}>
                    <p>Living</p>
                    <p>Dead</p>
                </div>
                <GridLayout 
                    gridId={'next'} 
                    cellSize={35} 
                    xDim={9} 
                    yDim={2}
                    {...this.props}
                />
            </div>
        );
    }
}

export default LifeRules;