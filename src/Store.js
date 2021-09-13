import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
// import {watchGetPerson} from './sagas/saga';
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
