import { connect } from 'react-redux'

import ThirdScreen from '../components/ThirdScreen'
import { navigateJumpToKey } from '../actions'


const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigateJumpToKey('First'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThirdScreen)