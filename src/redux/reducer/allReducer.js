import { combineReducers  } from "redux";
import   headerReducer from "./headerReducer";
import  otherReducer  from "./otherReducer";
import startReducer from './startReducer';

const allReducer =  combineReducers({headerReducer,otherReducer,startReducer})


export default allReducer