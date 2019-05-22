import React, {Component} from 'react';

class Cell extends Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		const { id, gridId, onClick } = this.props;
		onClick(id, gridId);
	}

	render() {
		const { id, currentCell, xDim, cellSize } = this.props;
		const row = Math.floor(id/xDim);
		const col = id % xDim;
		const left = col * cellSize;
		const top = row * cellSize;
		const isLive = currentCell ? 'living' : ''

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
}

export default Cell;