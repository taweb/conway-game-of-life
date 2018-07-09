import Controls from "../components/Controls";
import { connect } from "react-redux";
import { nextGeneration, toggleAutoGeneration, randomise, selectRule, resetRules } from "../data/actions/state";

const mapStateToProps = (state) => {
	return {
		auto: state.options.autoGeneration,
		count: state.options.count
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextGeneration: () => dispatch(nextGeneration()),
		toggleAutoGeneration: () => dispatch(toggleAutoGeneration()),
		randomise: (factor) => dispatch(randomise(factor)),
		selectRule: (id) => dispatch(selectRule(id)),
		resetRules: () => dispatch(resetRules())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);