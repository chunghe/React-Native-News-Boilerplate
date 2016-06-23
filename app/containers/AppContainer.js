'use strict'

import React, {PropTypes} from 'react'
import {NavigationExperimental, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import First from './First'
import Second from './Second'
import Third from './Third'
import Modal from './Modal'
import { navigatePush, navigatePop } from '../actions'

const {
  CardStack: NavigationCardStack,
	Header: NavigationHeader,
} = NavigationExperimental


class AppContainer extends React.Component {

	render() {
		const { navigationState, onNavigate } = this.props

    return (
			// Redux is handling the reduction of our state for us. We grab the navigationState 
			// we have in our Redux store and pass it directly to the <NavigationTransitioner />.
      <NavigationCardStack 
				navigationState={navigationState}
				style={styles.outerContainer}
				onNavigate={onNavigate}
        renderScene={this._renderScene}
        renderOverlay={this._renderHeader}
      />
    )
	}

  _renderScene({scene}) {
		const { route } = scene
    console.log('scene', scene, 'route', route);

		switch(route.key) {
		case 'First':
      return (
        <First 
          key={scene.key} 
          route={route}
        />
      )
		case 'Second':
			return (
				<Second 
					key={scene.key} 
          route={route}
				/>
			);
		case 'Third':
      return (
				<Third 
					key={scene.key} 
          route={route}
				/>
      )
		}
  }

  _renderHeader(sceneProps) {
console.log('sceneProps', sceneProps);
		return (
			<NavigationHeader
				{...sceneProps}
				renderTitleComponent={props => {
					const title = props.scene.route.title
					return <NavigationHeader.Title>{title}</NavigationHeader.Title>
				}}
			/>
		)
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
				action.type === 'BackAction' ||
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
