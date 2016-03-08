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
			<NavigationAnimatedView
				navigationState={navigationState}
				style={styles.outerContainer}
				renderOverlay={(position, layout) => (
					<NavigationHeader
						navigationState={navigationState}
						position={position}
						getTitle={state => state.key}
						onNavigate={onBack}
					/>
				)}
				renderScene={(state, index, position, layout) => (
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