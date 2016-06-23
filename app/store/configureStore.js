import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import devTools from 'remote-redux-devtools';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let enhancer;

if (__DEV__) {
  enhancer = compose(
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  );
}

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../redux/reducers').default); // eslint-disable-line global-require
    });
  }

  return store;
}
