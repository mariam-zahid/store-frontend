import { combineReducers } from "redux";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from "./userReducers";
import { authReducer } from "./authenticationReducers";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  authentication: authReducer,
});

export default reducers;
