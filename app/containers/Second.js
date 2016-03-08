import { connect } from 'react-redux'

import SecondScreen from '../components/SecondScreen'
import { navigate } from '../actions'


const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigate('Third'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondScreen)