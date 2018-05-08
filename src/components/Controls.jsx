import React, { Component } from 'react';

class Controls extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.setAutoGeneration = this.setAutoGeneration.bind(this);
		this.toggleAutoGeneration = this.toggleAutoGeneration.bind(this);
	} 

	onClick(){
		const { auto } = this.props;
		auto ? 
			this.toggleAutoGeneration() 
			: 
			this.props.nextGeneration();
	}	

	toggleAutoGeneration(){
		const { auto } = this.props;
		this.props.toggleAutoGeneration();
		this.setAutoGeneration(auto);
	}

	setAutoGeneration(setting) {
		!setting ? 
			this.update = setInterval(this.props.nextGeneration, 100)
			:
			clearInterval(this.update);
	}

	render() {
		const { auto } = this.props;
		return (
			<div> 
				<button onClick={this.onClick}>Next Generation</button>
				<button onClick={this.toggleAutoGeneration}>
					{!auto ? "start" : "stop"}
				</button>

			</div>
		)
	}
}

export default Controls;