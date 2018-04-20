import * as types from "./actionsTypes";

export function updateFilter(newFilter) {
  return {
    type: types.UPDATE_FILTER,
    filter: newFilter
  };
}
