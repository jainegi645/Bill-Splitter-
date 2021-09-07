import bill from "./bill";
import tip from "./tip";
import person from "./person";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    bill,
    tip,
    person
});

export default rootReducer;