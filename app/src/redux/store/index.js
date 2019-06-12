import {createStore} from "redux";
import reducer from "../reducers";

const state = {
  background: "",
  showMenu: false // show hide menu 
};

export const store = createStore(reducer, state);