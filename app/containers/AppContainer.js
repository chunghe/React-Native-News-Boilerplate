'use strict'

import React, { Component, Animated, NavigationExperimental, View, ScrollView, Text, StyleSheet, PropTypes } from 'react-native'
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


class AppContainer extends Component {
	componentWillMount() {
		this._renderNavigated = this._renderNavigated.bind(this)
		this._renderScene = this._renderScene.bind(this)
	}

	render() {
		return (
			this._renderNavigated(this.props.navigationState, this.props.onNavigate)
		)
	}

	_renderNavigated(navigationState, onNavigate) {
		if (!navigationState) {
			return null
		}
		console.log('navState:', navigationState)
		return (
			<NavigationAnimatedView
				navigationState={navigationState}
				style={styles.animatedView}
				renderOverlay={(position, layout) => (
					<NavigationHeader
						navigationState={navigationState}
						position={position}
						getTitle={state => state.key}
						onNavigate={this.props.onBack}
					/>
				)}
				renderScene={(state, index, position, layout) => (
					<NavigationCard
						key={state.key}
						index={index}
						navigationState={navigationState}
						position={position}
						layout={layout}>
						<ScrollView style={styles.container}>
							<Text>Hello there</Text>
							<Text onPress={() => {onNavigate('Second')}}>{navigationState.children[navigationState.index].key}</Text>
							{this._renderScene()}
						</ScrollView>
					</NavigationCard>
				)}
			/>
		)
	}

	_renderScene() {
		let { children, index } = this.props.navigationState
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

AppContainer.contextTypes = {
	onNavigate: PropTypes.func
}

AppContainer.childContextTypes = {
	onNavigate: PropTypes.func
}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1
	},
	container: {
		flex: 1,
		paddingTop: 64
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