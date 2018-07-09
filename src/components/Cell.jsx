import React, { Component } from 'react';

const Cell = (props) => {

	this.handleClick = () => {
		const { id, gridId } = props;
		props.onClick(id, gridId);
	}

	console.log('render cell');
	const { id, currentCell, xDim, cellSize, onClick } = props;
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
		/>
	)
}

export default Cell;