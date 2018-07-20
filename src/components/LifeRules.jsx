import React, { Component } from 'react';
import GridLayout from './GridLayout';
import Button from './Button';

class LifeRules extends Component {
    resetRules() {
        this.props.resetRules();
    }
    render() {
        return (
            <div className="liferules">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{marginRight: '10px'}}>
                        <p>Dead</p>
                        <p>Living</p>
                    </div>
                    <GridLayout 
                        gridId={'next'} 
                        cellSize={35} 
                        xDim={9} 
                        yDim={2}
                        {...this.props}
                    />
                </div>
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        id="wrap" 
                        name="wrap"
                        value={this.props.wrap}
                        onClick={this.props.toggleWrap}
                    />
                    <label htmlFor="wrap">Grid Wrap</label>
                </div>
                <Button onButtonClick={this.props.onReset}>Reset Rules</Button>
            </div>
        );
    }
}

export default LifeRules;