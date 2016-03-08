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
			dispatch(navigate('First'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThirdScreen)