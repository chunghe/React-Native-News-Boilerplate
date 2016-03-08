'use strict'

import React, { Component, View, StyleSheet, PropTypes } from 'react-native'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'


class AppContainer extends Component {
	render() {
		let screen = this.navRender()
		
		return (
			<View style={styles.outerContainer}>
				{screen}
			</View>
		)
	}

	navRender = () => {
		switch(this.props.currentRoute) {
		case 'First':
			return <First />
		case 'Second':
			return <Second />
		case 'Third':
			return <Third />
		}
	};
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