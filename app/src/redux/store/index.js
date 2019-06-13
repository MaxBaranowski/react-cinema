import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import reducer from "../reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const state = {
  background: "",
  showMenu: false // show hide menu
};

export const store = createStore(reducer, state,  composeWithDevTools(applyMiddleware(thunk)));
