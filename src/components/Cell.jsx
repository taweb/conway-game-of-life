import React, { Component } from 'react';

class Cell extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const {id, widthGrid, cellSize} = this.props;
		const row = Math.floor(id/widthGrid);
		const col = id % widthGrid;
		const left = col * cellSize;
		const top = row * cellSize;
		return (
			<div 
				className="cell"
				style={{
					left: `${left}px`,
					top: `${top}px`,
					width: `${cellSize}px`,
					height: `${cellSize}px`
				}}
			>
				{id}
			</div>
		)
	}
}


export default Cell;


