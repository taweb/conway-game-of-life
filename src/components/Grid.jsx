import React, { Component } from 'react';
import Cell from '../containers/Cell';

class Grid extends Component {

	constructor(props) {
		super(props); 
	}

	render() {
		const {heightGrid, widthGrid, cellSize} = this.props;
		const numCells = heightGrid * widthGrid;
		let cells = [];
		for(let i=0; i<numCells; i++){
			cells.push(i);
		}
		return(
			<div>
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