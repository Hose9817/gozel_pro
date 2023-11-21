import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { cashReducer } from "../reducers/cashReducer";
import { customerReducer } from "../reducers/customerReducer";
import { userReducer } from "../reducers/userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
