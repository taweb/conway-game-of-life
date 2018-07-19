import Cell from "../components/Cell";
import { connect } from "react-redux";

const mapStateToProps = (state, { id, gridId }) => {
	return {
		currentCell: gridId === 'life' ? state[gridId][id].live : state.rules[id>=9 ? 1 : 0][id>=9 ? id - 9 : id]
	}
}

export default connect(mapStateToProps)(Cell);