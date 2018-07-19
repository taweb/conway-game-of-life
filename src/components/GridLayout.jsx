import React from 'react';
import Cell from '../containers/Cell';

const GridLayout = (props) => {
	const { cellSize, xDim, yDim } = props;
	const numCells = xDim * yDim;
	let cells = [];
	for(let i=0; i<numCells; i++){
		cells.push(i);
	}
	return(
		<div 
			style={{
				position: "relative", 
				height: `${yDim * cellSize}px`, 
				width: `${xDim * cellSize}px`, 
				display: "inline-block"
			}}
		>
			{cells.map(i=>{
				return ( 
					<Cell 
						key={i}
						id={i}
						{...props}
					/>
				)
			})}
		</div>
	)
}

export default GridLayout;