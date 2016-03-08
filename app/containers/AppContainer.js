'use strict'

import React, { Component, Animated, NavigationExperimental, View, ScrollView, Text, StyleSheet, PropTypes } from 'react-native'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'

const {
	AnimatedView: NavigationAnimatedView,
	Card: NavigationCard,
	RootContainer: NavigationRootContainer,
	Reducer: NavigationReducer,
	Header: NavigationHeader
} = NavigationExperimental;

const NavigationBasicReducer = NavigationReducer.StackReducer({
	initialStates: [
		{key: 'First Route'}
	],
	matchAction: action => true,
	actionStateMap: actionString => ({key: actionString})
})

class AppContainer extends Component {
	componentWillMount() {
		this._renderNavigated = this._renderNavigated.bind(this)
		this._renderScene = this._renderScene.bind(this)
	}

	render() {
		return (
			<NavigationRootContainer
				reducer={(lastState, action) => {
					console.log('In custom reducer')
					console.log('lastState:', lastState)
					console.log('action: ', action)
					return {
						key: 'NAV_STACK_DEFAULT_KEY',
						index: 0,
						children: [
							{ key: 'First Route' }
						]
					}
				}}
				ref={navRootContainer => { this.navRootContainer = navRootContainer }}
				persistenceKey="NavigationAnimatedExampleState"
				renderNavigation={this._renderNavigated}
			/>
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
							<Text onPress={() => {onNavigate('Route #' + navigationState.children.length)}}>{navigationState.children[navigationState.index].key}</Text>
							{this._renderScene()}
						</ScrollView>
					</NavigationCard>
				)}
			/>
		)
	}

	_renderScene() {
		console.log('got to renderScene')
		switch(this.props.currentRoute) {
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
		marginTop: 64
	}
})

export default connect(
	state => ({
		currentRoute: state.currentRoute,
		navigationState: state.navigationState
	}),
	dispatch => ({
		onNavigate: (destState) => dispatch({type: 'NAV_PUSH', destState})
	})
)(AppContainer)