import Controls from "../components/Controls";
import { connect } from "react-redux";
import { nextGeneration } from "../data/actions/state";

const mapDispatchToProps = dispatch => {
	return {
		nextGeneration: () => dispatch(nextGeneration())
	}
}

export default connect(null, mapDispatchToProps)(Controls);