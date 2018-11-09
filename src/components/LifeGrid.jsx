import React, { Component } from 'react';
import GridLayout from './GridLayout';

class LifeGrid extends Component {
    constructor(props) {
        super(props);
        const { cellSize, gridId } = this.props;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const maxGridWidth = screenWidth - 20;
        const maxGridHeight = screenHeight - 250;

        const calcNumCols = Math.floor(maxGridWidth / cellSize);
        const calcNumRows = Math.floor(maxGridHeight / cellSize);
        
        this.finalGridWidth = Math.min(calcNumCols, calcNumRows);

        const numCells = this.finalGridWidth * this.finalGridWidth;

        this.props.populateCells(numCells, gridId);

        this.selectCell = this.selectCell.bind(this);
    }

    selectCell(id, gridId) {
		this.props.selectCell(id, gridId);
    }

    render () {
        
        return (
            <div>
                <GridLayout 
                    gridId={this.props.gridId} 
                    cellSize={this.props.cellSize} 
                    xDim={this.finalGridWidth} 
                    yDim={this.finalGridWidth}
                    onClick={this.selectCell}
                />
            </div>
        );
    }
}

export default LifeGrid;