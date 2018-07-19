import Controls from "../components/Controls";
import { connect } from "react-redux";
import { nextGeneration, toggleAutoGeneration, randomise, selectRule, resetRules, toggleWrap, clearGrid } from "../data/actions/state";

const mapStateToProps = (state) => {
	return {
		auto: state.options.autoGeneration,
		wrap: state.options.wrap
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextGeneration: () => dispatch(nextGeneration()),
		toggleAutoGeneration: () => dispatch(toggleAutoGeneration()),
		randomise: (factor) => dispatch(randomise(factor)),
		selectRule: (id) => dispatch(selectRule(id)),
		resetRules: () => dispatch(resetRules()),
		toggleWrap: () => dispatch(toggleWrap()),
		clearGrid: () => dispatch(clearGrid())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);