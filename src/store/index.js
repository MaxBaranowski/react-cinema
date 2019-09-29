import {createStore} from "redux";
import reducer from "../reducers";

const state = {
  showMenu: true // show hide menu 
};

export const store = createStore(reducer, state);