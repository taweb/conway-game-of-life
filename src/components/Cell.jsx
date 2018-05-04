import React, { Component } from 'react';

const printNeighbours = (id, widthGrid) => {
	console.log(`clicked: ${id}`);

	const left = (cell, widthGrid) => cell % widthGrid === 0 ? cell + (widthGrid - 1) : cell - 1;
	const right = (cell, widthGrid) => (cell + 1) % widthGrid === 0 ? (cell- widthGrid) + 1 : cell + 1;

	const south = (id + widthGrid) % (widthGrid*widthGrid);
	const north = (id < widthGrid) ? (widthGrid*widthGrid) - (widthGrid-id) : id - widthGrid;
	const east = (id + 1) % widthGrid === 0 ? (id- widthGrid) + 1 : id + 1;
	const west = id % widthGrid === 0 ? id + (widthGrid - 1) : id - 1;

	const northwest = left(north, widthGrid);
	const northeast = right(north, widthGrid);
	const southwest = left(south, widthGrid);
	const southeast = right(south, widthGrid);

	console.log(`south: ${south}`);
	console.log(`north: ${north}`);
	console.log(`east: ${east}`);
	console.log(`west: ${west}`);
	console.log(`nw: ${northwest}`);
	console.log(`ne: ${northeast}`);
	console.log(`sw: ${southwest}`);
	console.log(`se: ${southeast}`);

}



class Cell extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	} 

	onClick(){
		const { id, widthGrid } = this.props;
		this.props.selectCell(id);

		// printNeighbours(id, widthGrid);
	}	

	render() {
		const { id, widthGrid, cellSize, currentCell } = this.props;
		const row = Math.floor(id/widthGrid);
		const col = id % widthGrid;
		const left = col * cellSize;
		const top = row * cellSize;
		const isLive = currentCell.live ? "living" : "dead";
		
		return (
			<div 
				className={["cell", isLive].join(' ')}
				onClick={this.onClick}
				style={{
					position: "absolute",
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