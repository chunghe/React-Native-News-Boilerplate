import { combineReducers } from 'redux'

import { NAVIGATE } from './actions'


function currentRoute(state = 'First', action) {
	switch (action.type) {

	case NAVIGATE:
		return action.destinationKey

	default: 
		return state
	}
}

const appReducers = combineReducers({
	currentRoute
})

export default appReducers