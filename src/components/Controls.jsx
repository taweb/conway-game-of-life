import React, { Component } from 'react';

class Controls extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.autoGenerate = this.autoGenerate.bind(this);
		this.toggleAutoGeneration = this.toggleAutoGeneration.bind(this);
	} 

	onClick(){
	const { auto } = this.props;
	auto ? this.toggleAutoGeneration(auto) : this.props.nextGeneration();
		// this.props.nextGeneration();
	}	

	toggleAutoGeneration(setting){
		this.props.toggleAutoGeneration();
		this.autoGenerate(setting);
	}

	autoGenerate(setting) {
		!setting ? this.update = setInterval(this.props.nextGeneration, 1000) : null;
		!setting ? this.update : clearInterval(this.update);
	}

	render() {
		return (
			<div> 
				<button onClick={this.onClick}>Click Me!</button>
				<button onClick={() => this.toggleAutoGeneration(this.props.auto)}>
					{!this.props.auto ? "start" : "stop"}
				</button>

			</div>
		)
	}
}

export default Controls;