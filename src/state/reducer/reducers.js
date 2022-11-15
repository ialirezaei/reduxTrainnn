import { combineReducers } from "redux";
import noteReducers from "./noteReducers";

const reducers = combineReducers({
    note: noteReducers,
})

export default reducers