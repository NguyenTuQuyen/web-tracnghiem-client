import {combineReducers} from "redux";
import {users} from "./users.reducer";

const rootReducers = combineReducers({
    users
});
export default rootReducers;