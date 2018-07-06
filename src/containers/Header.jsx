import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		count: state.options.count
	}
}

export default connect(mapStateToProps)(Header);