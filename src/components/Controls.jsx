import React, { Component } from 'react';
import Button from './Button';
import LifeRules from './LifeRules';

window.requestAnimationFrame = function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(f) {
            window.setTimeout(f,1e3/60);
        }
}();

window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame          ||
        window.webkitCancelRequestAnimationFrame    ||
        window.mozCancelRequestAnimationFrame       ||
        window.oCancelRequestAnimationFrame     ||
        window.msCancelRequestAnimationFrame        ||
        clearTimeout
} )();

class Controls extends Component {
	constructor(props){
		super(props);
		this.nextGeneration = this.nextGeneration.bind(this);
		this.toggleAutoGeneration = this.toggleAutoGeneration.bind(this);
		this.randomise = this.randomise.bind(this);
		this.onRateChange = this.onRateChange.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.resetRules = this.resetRules.bind(this);
		this.toggleWrap = this.toggleWrap.bind(this);
		this.clearGrid = this.clearGrid.bind(this);
		this.draw = this.draw.bind(this);
		this.selectRule = this.selectRule.bind(this)

		this.state = {
			rate: 400,
			random: 50,
			pause: 20000
		};

		this.animationId = null
		this.fps = 60
		this.now = null
		this.then = Date.now();
		this.delta = null
		this.first = this.then;
	} 

	nextGeneration(){
		const { auto } = this.props;
		auto && this.toggleAutoGeneration() 
		this.props.nextGeneration();
	}	

	draw() {
		const { pause } = this.state;
		this.animationId = window.requestAnimationFrame(this.draw);
		const interval = pause/this.fps;
		this.now = Date.now();
		this.delta = this.now - this.then;
		if (this.delta > interval) { // interval = seconds per frame
			this.then = this.now - (this.delta % interval);
			this.props.nextGeneration()
		}   
	}

	start(){
		this.draw()
	}

	cancel(){
		window.cancelRequestAnimFrame(this.animationId)
		this.animationId = null;
	}

	toggleAutoGeneration(){
		const { auto } = this.props;
		this.props.toggleAutoGeneration();
		!auto ? 
			this.start()
			:
			this.cancel()
	}

	randomise(factor) {
		const { auto } = this.props;
		auto && this.toggleAutoGeneration(); 
		this.props.randomise(factor);
	}

	onRateChange(e) {
		const { auto } = this.props;
		const { value } = e.target;
		this.setState({
			...this.state,
			pause: value
		})
	}

	selectOption(e) {
		const newRandom = e.target.value;
		this.setState(state => ({...state, random: newRandom}))
	}

	selectRule(id) {
		this.props.selectRule(id);
	}

	resetRules() {
		this.props.resetRules()
	}

	toggleWrap() {
		this.props.toggleWrap()
	}

	clearGrid() {
		const { auto } = this.props;
		auto && this.toggleAutoGeneration(); 
		this.props.clearGrid()
	}

	render() {
		const { auto, wrap } = this.props;
		const { rate } = this.state;
		const adjustedRate = 860 - rate;
		return (
			<div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> 
				<LifeRules onClick={this.selectRule} onReset={this.resetRules} wrap={wrap} toggleWrap={this.toggleWrap}/>
				<div>
					<h3>Game Controls</h3>
					<div className="lifecontrols">
						<Button onButtonClick={this.nextGeneration}>Next Generation</Button>
						<Button onButtonClick={this.toggleAutoGeneration} value={adjustedRate}>
							{!auto ? "start" : "stop"}
						</Button>
						<input 
							type="range" 
							min="5000" 
							max="40000" 
							value= {this.state.pause} 
							id="utilslider"
							onChange={this.onRateChange}
						/>
						<Button onButtonClick={this.randomise} value={this.state.random}>
							Randomise!
						</Button>
						<div className="select">
							<span className="arr"></span>
							<select value={this.state.random}onChange={this.selectOption}>
								<option value="20">20%</option>
								<option value="40">40%</option>
								<option value="60">60%</option>
							</select>
						</div>
						<Button onButtonClick={this.clearGrid}>Clear Grid</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default Controls;