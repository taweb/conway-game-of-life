import React, { Component } from 'react';

class Cell extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	} 

	onClick(){
		console.log('CLICK')
		const { id, gridId } = this.props;
		this.props.selectCell(id, gridId);
	}	

	render() {
		console.log('RENDERCELL')
		const { id, currentCell, xDim, cellSize } = this.props;
		const row = Math.floor(id/xDim);
		const col = id % xDim;
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

export default Cell;