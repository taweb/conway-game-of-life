import Controls from "../components/Controls";
import { connect } from "react-redux";
import { nextGeneration, toggleAutoGeneration, randomise } from "../data/actions/state";

const mapStateToProps = (state) => {
	return {
		auto: state.options.autoGeneration
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextGeneration: () => dispatch(nextGeneration()),
		toggleAutoGeneration: () => dispatch(toggleAutoGeneration()),
		randomise: (factor) => dispatch(randomise(factor)),

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);