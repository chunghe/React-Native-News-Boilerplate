'use strict'

import React, {PropTypes} from 'react';
import {NavigationExperimental, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'
import Modal from './Modal'
import { navigatePush, navigatePop } from '../actions'

const {
	AnimatedView: NavigationAnimatedView,
	Card: NavigationCard,
	Header: NavigationHeader,
	RootContainer: NavigationRootContainer
} = NavigationExperimental


class AppContainer extends React.Component {
	render() {
		let { navigationState, onNavigate } = this.props

		return (

			// Note that we are not using a NavigationRootContainer here because Redux is handling
			// the reduction of our state for us. Instead, we grab the navigationState we have in 
			// our Redux store and pass it directly to the <NavigationAnimatedView />.
			<NavigationAnimatedView
				navigationState={navigationState}
				style={styles.outerContainer}
				onNavigate={onNavigate}
				renderOverlay={props => (
					<NavigationHeader
						{...props}
						renderTitleComponent={props => {
							const title = props.scene.navigationState.title
							return <NavigationHeader.Title>{title}</NavigationHeader.Title>
						}}
						// When dealing with modals you may also want to override renderLeftComponent...
					/>
				)}
				renderScene={props => (
					// Again, we pass our navigationState from the Redux store to <NavigationCard />.
					// Finally, we'll render out our scene based on navigationState in _renderScene().
					<NavigationCard
						{...props}
						// Transition animations are determined by the StyleInterpolators. Here we manually
						// override the default horizontal style interpolator that gets applied inside of 
						// NavigationCard for a vertical direction animation if we are showing a modal.
						style={props.scene.navigationState.key === 'Modal' ?
									NavigationCard.CardStackStyleInterpolator.forVertical(props) :
									undefined
						}
						// By default a user can swipe back to pop from the stack. Disable this for modals.
						// Just like for style interpolators, returning undefined lets NavigationCard override it.
						panHandlers={props.scene.navigationState.key === 'Modal' ? null : undefined }
						renderScene={this._renderScene}
						key={props.scene.navigationState.key}
					/>
				)}
			/>
		)
	}

	_renderScene({scene}) {
		const { navigationState } = scene
		
		switch(navigationState.key) {
		case 'First':
			return <First />
		case 'Second':
			return <Second />
		case 'Third':
			return <Third />
		case 'Modal':
			return <Modal />
		}
	}
}

AppContainer.propTypes = {
	navigationState: PropTypes.object,
	onNavigate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1
	},
	container: {
		flex: 1
	}
})

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		onNavigate: (action) => {
			// Two types of actions are likely to be passed, both representing "back"
			// style actions. Check if a type has been indicated, and try to match it.
			if (action.type && (
				action.type === NavigationRootContainer.getBackAction().type ||
				action.type === NavigationCard.CardStackPanResponder.Actions.BACK.type)
			) {
				dispatch(navigatePop())
			} else {
				// Currently unused by NavigationExperimental (only passes back actions),
				// but could potentially be used by custom components.
				dispatch(navigatePush(action))
			}
		}
	})
)(AppContainer)