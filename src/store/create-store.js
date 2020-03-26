import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore
} from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
// eslint-disable-next-line no-shadow
export const createStoreFactory = ({
  applyMiddleware,
  compose,
  reduxCreateStore,
  thunk,
  makeRootReducer
}) => (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = reduxCreateStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  return store;
};
const store = createStoreFactory({
  applyMiddleware,
  compose,
  reduxCreateStore,
  thunk,
  makeRootReducer
})();
export default store;