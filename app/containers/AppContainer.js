'use strict'

import React, { Component, NavigationExperimental, View, StyleSheet, PropTypes } from 'react-native'
import NavigationRootContainer from 'NavigationRootContainer'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'

const NavigationCardStack = NavigationExperimental.Card


class AppContainer extends Component {
	componentWillMount() {
		this._renderNavigation = this._renderNavigation.bind(this)
		this._renderScene = this._renderScene.bind(this)
	}

	render() {
		return (
			<NavigationRootContainer 
				reducer={() => { return { key: 'First' }}}
				renderNavigation={this._renderNavigation} />
		)
	}

	_renderNavigation(navState, onNavigate) {
		return (
			<NavigationCardStack
				direction="horizontal"
				navigationState={navState}
				onNavigate={onNavigate}
				renderScene={this._renderScene}
				style={styles.outerContainer} />
		)
	}

	_renderScene(props) {
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
	}
})

export default connect(state => ({
	currentRoute: state.currentRoute
}))(AppContainer)