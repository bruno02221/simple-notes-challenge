import * as types from "./actionsTypes";
import { combineReducers } from "redux";

export function notes(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function filter(state = null, action) {
  switch (action.type) {
    case types.UPDATE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  notes,
  filter
});
