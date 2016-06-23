import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux/reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../redux/reducers').default);
    });
  }

  return store;
}
