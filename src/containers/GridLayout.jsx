import GridLayout from "../components/GridLayout";
import { connect } from "react-redux";
import { populateCells } from "../data/actions/state";

const mapDispatchToProps = dispatch => {
	return {
		populateCells: (cells, id) => dispatch(populateCells(cells, id)),
	}
} 

export default connect(null, mapDispatchToProps)(GridLayout);