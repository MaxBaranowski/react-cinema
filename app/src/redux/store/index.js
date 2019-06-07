import {createStore} from "redux";
import reducer from "../reducers";

const state = {
  showMenu: false // show hide menu 
};

export const store = createStore(reducer, state);