import React, { Component } from 'react';

class Controls extends Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.setAutoGeneration = this.setAutoGeneration.bind(this);
		this.toggleAutoGeneration = this.toggleAutoGeneration.bind(this);
		this.randomise = this.randomise.bind(this);
		this.onRateChange = this.onRateChange.bind(this);
		this.state = {
			rate: 10
		};
	} 

	onClick(){
		const { auto } = this.props;
		auto ? 
			this.toggleAutoGeneration() 
			: 
			this.props.nextGeneration();
	}	

	toggleAutoGeneration(rate){
		const { auto } = this.props;
		const updateRate = false;
		this.props.toggleAutoGeneration();
		this.setAutoGeneration(updateRate, auto, rate);
	}

	setAutoGeneration(updateRate, setting, rate) {
		!setting || updateRate ? 
			this.update = setInterval(this.props.nextGeneration, rate)
			:
			clearInterval(this.update);
	}

	randomise(factor) {
		// console.log(factor)
		this.props.randomise(factor);
	}

	onRateChange(e) {
		const { value } = e.target;
		this.setState({
			rate: value
		}, this.UpdateAutoGeneration(value))
	}

	UpdateAutoGeneration(value){
	// 	const adjustedRate = 1000 - value;
	// 	clearInterval(this.update);
	// 	this.update = setInterval(adjustedRate); 
	clearInterval(this.update);
	const { auto } = this.props;
	const updateRate = true;
	const adjustedRate = 860 - value
	this.setAutoGeneration(updateRate, auto, adjustedRate)
	}

	render() {
		const { auto } = this.props;
		const { rate } = this.state;
		const adjustedRate = 860 - rate;
		return (
			<div> 
				<button onClick={this.onClick}>Next Generation</button>
				<button onClick={()=>this.toggleAutoGeneration(adjustedRate)}>
					{!auto ? "start" : "stop"}
				</button>
				<input 
					type="range" 
					min="0" 
					max="800" 
					value= {this.state.rate} 
					id="utilslider"
					onChange={this.onRateChange}
				/>
				<p>{this.state.rate}</p>
				<button onClick={() => this.randomise(0.5)}>Randomise!</button>
			</div>
		)
	}
}

export default Controls;