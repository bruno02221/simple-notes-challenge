import { createStore } from "redux";
import appReducer from "./reducers";
import fakeNotes from "./fakeNotes";

const fakeInitialState = {
  notes: fakeNotes,
  filter: null
};

const store = createStore(appReducer, fakeInitialState);

export default store;
