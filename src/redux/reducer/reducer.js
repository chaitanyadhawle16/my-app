import { combineReducers } from "redux";
import { displayReducer} from "./displayReducer";

const reducer = combineReducers({data:displayReducer});

export default reducer;