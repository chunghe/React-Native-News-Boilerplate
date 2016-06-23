import { connect } from 'react-redux'

import ModalScreen from '../components/ModalScreen'
import { navigatePop } from '../redux/modules/routing';


const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePop())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalScreen)
