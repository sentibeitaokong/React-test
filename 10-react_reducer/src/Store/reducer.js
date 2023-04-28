import {reducer as homeReducer} from "./home";
import {reducer as counterReducer} from './counter'
import {combineReducers} from "redux";

const reducer=combineReducers({
    counterInfo:counterReducer,
    homeInfo:homeReducer
})
export default reducer