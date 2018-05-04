import Cell from "../components/Cell";
import { connect } from "react-redux";
import { selectCell } from "../data/actions/state";

const mapStateToProps = (state, { id }) => {
	return {
		currentCell: state.current[id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectCell: data => dispatch(selectCell(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);