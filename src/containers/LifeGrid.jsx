import LifeGrid from "../components/LifeGrid";
import { connect } from "react-redux";
import { populateCells, selectCell } from "../data/actions/state";

const mapDispatchToProps = dispatch => {
	return {
		populateCells: (cells, id) => dispatch(populateCells(cells, id)),
		selectCell: (id, gridId) => dispatch(selectCell(id, gridId))
	}
} 

export default connect(null, mapDispatchToProps)(LifeGrid);