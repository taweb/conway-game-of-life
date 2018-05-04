import React, { Component } from 'react';
import Cell from '../containers/Cell';

class Grid extends Component {

	constructor(props) { 
		super(props); 

		const { cellSize } = this.props;

		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;

		const maxGridWidth = screenWidth - 20;
		const maxGridHeight = screenHeight - 200;

		const calcNumCols = Math.floor(maxGridWidth / cellSize);
		const calcNumRows = Math.floor(maxGridHeight / cellSize);

		const finalGridWidth = Math.min(calcNumCols, calcNumRows);

		// console.log(finalGridWidth);

		this.props.populateCells(finalGridWidth*finalGridWidth);

		this.state = {
			widthGrid: finalGridWidth
		} 

	}  

	render() {
		// render out cells according to cells in redux state 
		const { cellSize } = this.props;
		const { widthGrid } = this.state;

		const numCells = widthGrid * widthGrid;
		let cells = [];
		for(let i=0; i<numCells; i++){
			cells.push(i);
		}

		return(
			<div 
				style={{
					position: "relative", 
					height: `${widthGrid*cellSize}px`, 
					width: `${widthGrid*cellSize}px`, 
					display: "inline-block"
				}}
			>
				{cells.map(i=>{
					return ( 
						<Cell 
							key={i}
							id={i}
							widthGrid={widthGrid} 
							cellSize={cellSize}
						/>
					)
				})}
			</div>
		)
	}
}

export default Grid;