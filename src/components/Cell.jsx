import React, { Component } from 'react';

const printNeighbours = (id, widthGrid) => {
	console.log(`clicked: ${id}`);
	const south = (id + widthGrid) % (widthGrid*widthGrid);
	const north = (id < widthGrid) ? (widthGrid*widthGrid) - (widthGrid-id) : id - widthGrid;


	console.log(`south: ${south}`);
	console.log(`north: ${north}`);

	// console.log(`right: ${id}`);
}



class Cell extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	} 

	onClick(){
		const { id, widthGrid } = this.props;
		this.props.selectCell(id);

		printNeighbours(id, widthGrid);
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

Cell.defaultProps = {
	isLive: "dead"
}

export default Cell;