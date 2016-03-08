'use strict'

import React, { NavigationExperimental, View, StyleSheet, PropTypes } from 'react-native'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'
import { navigatePush, navigatePop } from '../actions'

const {
	AnimatedView: NavigationAnimatedView,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental


class AppContainer extends React.Component {
	render() {
		let { navigationState, onNavigate, onBack } = this.props

		return (

			// Note that we are not using a NavigationRootContainer here because Redux is handling
			// the reduction of our state for us. Instead, we grab the navigationState we have in 
			// our Redux store and pass it directly to the <NavigationAnimatedView />.
			<NavigationAnimatedView
				navigationState={navigationState}
				style={styles.outerContainer}
				renderOverlay={(position, layout) => (

					// Also note that we must explicity pass <NavigationHeader /> an onNavigate prop
					// because we are no longer relying on an onNavigate function being available in
					// the global context (something NavigationRootContainer would have given us).
					<NavigationHeader
						navigationState={navigationState}
						position={position}
						getTitle={state => state.key}
						onNavigate={onBack}
					/>
				)}
				renderScene={(state, index, position, layout) => (

					// Again, we pass our navigationState from the Redux store to <NavigationCard />.
					// Finally, we'll render out our scene based on navigationState in _renderScene().
					<NavigationCard
						key={state.key}
						index={index}
						navigationState={navigationState}
						position={position}
						layout={layout}>
						<View style={styles.container}>
							{this._renderScene(navigationState)}
						</View>
					</NavigationCard>
				)}
			/>
		)
	}

	_renderScene(navigationState) {
		let { children, index } = navigationState
		
		switch(children[index].key) {
		case 'First':
			return <First />
		case 'Second':
			return <Second />
		case 'Third':
			return <Third />
		}
	}
}

AppContainer.propTypes = {
	navigationState: PropTypes.object,
	onNavigate: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired
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
		onNavigate: (destState) => dispatch(navigatePush(destState)),
		onBack: () => dispatch(navigatePop())
	})
)(AppContainer)