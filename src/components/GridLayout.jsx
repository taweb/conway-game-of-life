import React, { Component } from 'react';
import Cell from '../containers/Cell';

class GridLayout extends Component {
    constructor(props) { 
		super(props); 
        const { xDim, yDim, gridId } = this.props;
        const numCells = xDim * yDim;
        this.props.populateCells(numCells, gridId);
	}  

	render() {
		const { cellSize, xDim, yDim } = this.props;
		const numCells = xDim * yDim;
		let cells = [];
		for(let i=0; i<numCells; i++){
			cells.push(i);
		}

		return(
			<div 
				style={{
					position: "relative", 
					height: `${yDim * cellSize}px`, 
					width: `${xDim * cellSize}px`, 
					display: "inline-block"
				}}
			>
				{cells.map(i=>{
					return ( 
						<Cell 
							key={i}
							id={i}
							{...this.props}
						/>
					)
				})}
			</div>
		)
	}
}

export default GridLayout;