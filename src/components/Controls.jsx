import React, { Component } from 'react';

class Controls extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	} 

	onClick(){
		this.props.nextGeneration();
	}	

	render() {
		return (
			<div> 
				<button onClick={this.onClick}>Click Me!</button>
			</div>
		)
	}
}

export default Controls;