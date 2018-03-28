import { combineReducers } from "redux";
import uploadFileReducer from './uploadfile';
import listFileReducer from './listfile';

const rootReducer = combineReducers({
   uploadFileReducer:uploadFileReducer,
   listFileReducer:listFileReducer
   })


export default rootReducer;
