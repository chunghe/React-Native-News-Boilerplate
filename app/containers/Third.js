import { connect } from 'react-redux'

import ThirdScreen from '../components/ThirdScreen'
import { navigate } from '../actions'


const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigate('first'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThirdScreen)