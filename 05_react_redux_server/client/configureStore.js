/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

// eslint-disable-next-line no-undef
const initReduxDevTool = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ? window.devToolsExtension() : f => f;

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    initReduxDevTool
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
