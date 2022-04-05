import {combineReducers} from "redux"
import datareducer from "./Reducer"

const rootreducer=combineReducers({data:datareducer})
export default rootreducer