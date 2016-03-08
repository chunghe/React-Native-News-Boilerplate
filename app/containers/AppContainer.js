'use strict'

import React, { Component, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'


class AppContainer extends Component {

	render() {
		return (
			<View style={styles.outerContainer}>
				<First />
			</View>
		)
	}

}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1
	}
})

export default connect(state => ({
	//currentRoute: state.currentRoute
}))(AppContainer)