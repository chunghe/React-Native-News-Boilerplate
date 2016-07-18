import React, { PropTypes } from 'react';
import { View, TouchableOpacity, NavigationExperimental, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { navigatePush, navigatePop } from '../redux/modules/routing';
import Articles from './Articles';
import Article from './Article';
import Settings from '../components/Settings';
import { IconSetting } from '../assets/svg';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental;


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene({ scene }) {
    const { route } = scene;
    const componentsMapping = {
      Articles,
      Article,
      Settings
    };

    const toRender = componentsMapping[route.key] || null;
    // make all the Views' marginTop equals header height
    return (
      <View style={{ flex: 1, marginTop: NavigationExperimental.Header.HEIGHT }}>
      {React.createElement(toRender, { route })}
      </View>
    );
  }

  _renderHeader(sceneProps) {
    const { handleNavigateBack, pushRoute } = this.props;

    return (
      <NavigationHeader
        {...sceneProps}

        onNavigateBack={handleNavigateBack}
        renderRightComponent={props => {
          return (
            <TouchableOpacity
              style={[styles.center, { padding: 10 }]}
              onPress={() => { pushRoute({ key: 'Settings' }); }}
            >
              <IconSetting />
            </TouchableOpacity>
            );
        }}

        renderTitleComponent={props => {
          const route = props.scene.route;
          const title =  route.key === 'Articles' ? 'DEMO' : 'NEWS';
          return <NavigationHeader.Title>{title}</NavigationHeader.Title>;
        }}
      />
    );
  }

  render() {
    const { navigationState, handleNavigateBack } = this.props;

    return (
      // Redux is handling the reduction of our state for us. We grab the navigationState
      // we have in our Redux store and pass it directly to the <NavigationTransitioner />.
      <NavigationCardStack
        navigationState={navigationState}
        style={styles.outerContainer}
        onNavigateBack={handleNavigateBack}
        renderScene={this._renderScene}
        renderOverlay={this._renderHeader}
      />
    );
  }

}

AppContainer.propTypes = {
  navigationState: PropTypes.object,
  pushRoute: PropTypes.func.isRequired,
  handleNavigateBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  container: {
    flex: 1
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(
  state => ({
    navigationState: state.routing
  }),
  dispatch => ({
    handleNavigateBack: (action) => {
      dispatch(navigatePop());
    },
    pushRoute: (action) => {
      dispatch(navigatePush(action));
    }
  })
)(AppContainer);
