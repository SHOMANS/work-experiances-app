import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import WorkExperiancesReducer from "./WorkExperiance/reducer";
import FormReduser from "./From/reducer";

const reducers = combineReducers({ WorkExperiancesReducer, FormReduser });

export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
