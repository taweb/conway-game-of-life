import React, { Component } from 'react';
import Button from './Button';
import LifeRules from './LifeRules';

class Controls extends Component {
	constructor(props){
		super(props);
		this.nextGeneration = this.nextGeneration.bind(this);
		this.setAutoGeneration = this.setAutoGeneration.bind(this);
		this.toggleAutoGeneration = this.toggleAutoGeneration.bind(this);
		this.randomise = this.randomise.bind(this);
		this.onRateChange = this.onRateChange.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.resetRules = this.resetRules.bind(this);
		this.toggleWrap = this.toggleWrap.bind(this);
		this.clearGrid = this.clearGrid.bind(this);


		this.state = {
			rate: 400,
			random: 50
		};
		this.selectRule = this.selectRule.bind(this)
	} 

	nextGeneration(){
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
		this.props.randomise(factor);
	}

	onRateChange(e) {
		const { auto } = this.props;
		const { value } = e.target;
		this.setState({
			...this.state,
			rate: value
		}, this.UpdateAutoGeneration(value, auto))
	}

	UpdateAutoGeneration(value, auto){
		if (!auto) {
			return;
		}
		clearInterval(this.update);
		const updateRate = true;
		const adjustedRate = 860 - value
		this.setAutoGeneration(updateRate, auto, adjustedRate)
	}

	selectOption(e) {
		const newRandom = e.target.value;
		this.setState(state => ({...state, random: newRandom}))
	}

	selectRule(id) {
		// console.log(id)
		this.props.selectRule(id);
	}

	resetRules() {
		this.props.resetRules()
	}

	toggleWrap() {
		this.props.toggleWrap()
	}

	clearGrid() {
		this.props.clearGrid()
	}

	render() {
		const { auto, wrap } = this.props;
		const { rate } = this.state;
		const adjustedRate = 860 - rate;
		return (
			<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> 
				<LifeRules onClick={this.selectRule} onReset={this.resetRules} wrap={wrap} toggleWrap={this.toggleWrap}/>
				<div className="lifecontrols">
					<Button onButtonClick={this.nextGeneration}>Next Generation</Button>
					<Button onButtonClick={this.toggleAutoGeneration} value={adjustedRate}>
						{!auto ? "start" : "stop"}
					</Button>
					<input 
						type="range" 
						min="0" 
						max="800" 
						value= {this.state.rate} 
						id="utilslider"
						onChange={this.onRateChange}
					/>
					<Button onButtonClick={this.randomise} value={this.state.random}>
						Randomise!
					</Button>
					<div className="select">
						<span class="arr"></span>
						<select value={this.state.random}onChange={this.selectOption}>
							<option value="20">20%</option>
							<option value="40">40%</option>
							<option value="60">60%</option>
						</select>
					</div>
					<Button onButtonClick={this.clearGrid}>Clear Grid</Button>
				</div>
			</div>
		)
	}
}

export default Controls;