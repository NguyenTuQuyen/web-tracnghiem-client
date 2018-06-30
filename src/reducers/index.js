import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {alertReducer} from "./alertReducer";
import { authenticationReducer } from './authenticationReducer';

const rootReducers = combineReducers({
    usersReducer,
    alertReducer,
    authenticationReducer
});
export default rootReducers;