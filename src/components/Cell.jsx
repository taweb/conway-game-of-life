import React, { Component } from 'react';

class Cell extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const {id, width} = this.props;
		const row = Math.floor(id/width);
		const col = id % width;
		const left = col * 100;
		const top = row * 100;
		return (
			<div 
				className="cell"
				style={{
					left: `${left}px`,
					top: `${top}px`
				}}
			>
				{id}
			</div>
		)
	}
}


export default Cell;


