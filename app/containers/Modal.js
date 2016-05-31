import { connect } from 'react-redux'

import ModalScreen from '../components/ModalScreen'
import { navigatePop } from '../actions'


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