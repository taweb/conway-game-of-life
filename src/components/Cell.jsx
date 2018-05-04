import React, { Component } from 'react';

class Cell extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	} 

	onClick(){
		const { id } = this.props;
		this.props.selectCell(id)	
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
				
			</div>
		)
	}
}

Cell.defaultProps = {
	isLive: "dead"
}

export default Cell;