import bill from "./bill";
import tip from "./tip";
import person from "./person";
// import reset from './reset'

import {combineReducers} from "redux";

const appReducer = combineReducers(
    {
    bill,
    tip,
    person
   
});

const rootReducer = (state = appReducer.state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'reset') {
      state = undefined;
    }
  
    return appReducer(state, action);
  };


export default rootReducer;