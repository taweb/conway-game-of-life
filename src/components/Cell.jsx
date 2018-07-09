import React, { Component } from 'react';

class Cell extends Component {
	constructor(props){
		super(props);
	} 

	handleClick = () => {
		const { id, gridId } = this.props;
		this.props.onClick(id, gridId);
	}

	render() {
		console.log('render cell');
		const { id, currentCell, xDim, cellSize, onClick } = this.props;
		const row = Math.floor(id/xDim);
		const col = id % xDim;
		const left = col * cellSize;
		const top = row * cellSize;
		const isLive = currentCell ? "living" : "dead";
		
		return (
			<div 
				className={["cell", isLive].join(' ')}
				onClick={this.handleClick}
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