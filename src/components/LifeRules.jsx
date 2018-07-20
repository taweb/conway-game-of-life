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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h3>Rules</h3>
                    <div className="helptip">
                        <p>Every cell in the life game has 8 neighbouring cells, and therefore has 9 potential states relative to its neighbours (cell has 0-8 living neighbours). The rules also consider whether the cell is currently alive or dead, which corresponds to the 2 rows in the rules grid. Click the boxes to change the number of neighbours required for a cell to live to the next generation in both cases.</p>
                    </div>
                </div>
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
            </div>
        );
    }
}

export default LifeRules;