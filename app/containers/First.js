import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigate } from '../actions'


const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigate('Second'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FirstScreen)