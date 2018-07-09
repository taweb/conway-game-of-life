import React, { Component } from 'react';
import GridLayout from './GridLayout';
import Button from './Button';

class LifeRules extends Component {
    resetRules() {
        this.props.resetRules();
    }
    render() {
        return (
            <div>
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
                <Button onButtonClick={this.props.onReset}>Reset Rules</Button>
            </div>
        );
    }
}

export default LifeRules;