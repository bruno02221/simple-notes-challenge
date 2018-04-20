import * as reducers from "./reducers";
import * as types from "./actionsTypes";

describe("reducers", () => {
  describe("filter", () => {
    it("handles UPDATE_FILTER", () => {
      expect(
        reducers.filter("oldFilter", {
          type: types.UPDATE_FILTER,
          filter: "newFilter"
        })
      ).toEqual("newFilter");
    });
  });
});
