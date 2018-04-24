import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {height, width} = this.props;
		const numCells = height * width;
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
							width={width} 
						/>
						)
				})}
			</div>
		)
	}
}

export default Grid;