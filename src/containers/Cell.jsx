import Cell from "../components/Cell";
import { connect } from "react-redux";
import { selectCell } from "../data/actions/state";

const mapStateToProps = (state, { id, gridId }) => {
	return {
		currentCell: state[gridId][id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectCell: (id, gridId) => dispatch(selectCell(id, gridId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);