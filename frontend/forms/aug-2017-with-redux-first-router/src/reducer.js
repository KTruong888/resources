import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import appReducer from "modules/app/app.reducers";

export default function createReducer(extraReducerObjects) {
  return combineReducers({
    app: appReducer,
    form: formReducer,
    ...extraReducerObjects
  });
}
