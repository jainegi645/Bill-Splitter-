import {createStore,applyMiddleware,compose} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

sagaMiddleware.run();


const store = createStore(
  rootReducer,composedEnhancer);

  
export default store;