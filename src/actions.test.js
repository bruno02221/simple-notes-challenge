import * as actions from "./actions";
import * as types from "./actionsTypes";

describe("actions", () => {
  describe("updateFilter", () => {
    it("creates UPDATE_FILTER", () => {
      expect(actions.updateFilter("newFilter")).toEqual({
        type: types.UPDATE_FILTER,
        filter: "newFilter"
      });
    });
  });
});
