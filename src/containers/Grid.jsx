import Grid from "../components/Grid";
import { connect } from "react-redux";
import { populateCells } from "../data/actions/state";

const mapDispatchToProps = dispatch => {
	return {
		populateCells: data => dispatch(populateCells(data)),
	}
} 

export default connect(null, mapDispatchToProps)(Grid);