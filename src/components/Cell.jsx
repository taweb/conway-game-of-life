import React from 'react';
import { Rect } from 'react-konva';

const Cell = (props) => {
	this.handleClick = () => {
		const { id, gridId } = props;
		props.onClick(id, gridId);
	}

	const { id, currentCell, xDim, cellSize } = props;
	const row = Math.floor(id/xDim);
	const col = id % xDim;
	const left = col * cellSize;
	const top = row * cellSize;
	
	return (
		// <div 
		// 	className={["cell", isLive].join(' ')}
		// 	onClick={this.handleClick}
		// 	style={{
		// 		position: "absolute",
		// 		left: `${left}px`,
		// 		top: `${top}px`,
		// 		width: `${cellSize}px`,
		// 		height: `${cellSize}px`
		// 	}}
		// />
		<Rect
			x={left}
			y={top}
			width={cellSize}
			height={cellSize}
			fill={currentCell ? '#3de045' : '#414284'}
			stroke={'#d1d1d1'}
			strokeWidth={1}
			onClick={this.handleClick}
		/>
	)
}

export default Cell;