import { combineReducers } from 'redux'

import { NAVIGATE, NAV_PUSH, NAV_POP, NAV_JUMP_TO_KEY, NAV_JUMP_TO_INDEX, NAV_RESET } from './actions'
const initialNavState = {
	key: 'MainNavigation',
	index: 0,
	children: [
		{ key: 'MainPage' }
	]
}


function currentRoute(state = 'First', action) {
	switch (action.type) {

	case NAVIGATE:
		return action.destinationKey

	default: 
		return state
	}
}

function navigationState(state = initialNavState, action) {
	switch (action.type) {
	case NAV_PUSH:
		return {
			...state,
			children: [
				...state.children,
				action.state
			],
			index: state.children.length
		}
	default:
		return state
	}
}

const appReducers = combineReducers({
	currentRoute,
	navigationState
})

export default appReducers