import { combineReducers } from 'redux'

import { NAVIGATE } from './actions'


function currentRoute(state = '', action) {
	switch (action.type) {
	case NAVIGATE:
		return state
	default: 
		return state
	}
}

const appReducers = combineReducers({
	currentRoute
})

export default appReducers