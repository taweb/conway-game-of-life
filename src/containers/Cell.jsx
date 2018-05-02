import Cell from "../components/Cell";
import { connect } from "react-redux";
import { addCell } from "../data/actions/state";

const mapDispatchToProps = dispatch => {
	return {
		addCell: data => dispatch(addCell(data)),
	}
}

export default connect(null, mapDispatchToProps)(Cell);