import approximatelyMatch from "./approximatelyMatch";

describe("approximatelyMatch", () => {
  it("matches when empty term", () => {
    expect(approximatelyMatch("notes", "")).toBeTruthy();
  });

  it("matches when term equals to string", () => {
    expect(approximatelyMatch("notes", "notes")).toBeTruthy();
  });

  it("matches when term is part of the string", () => {
    expect(approximatelyMatch("notes", "ote")).toBeTruthy();
    expect(approximatelyMatch("notes", "no")).toBeTruthy();
    expect(approximatelyMatch("notes", "es")).toBeTruthy();
  });

  it("matches when term is found sequentially in string", () => {
    expect(approximatelyMatch("notes", "nts")).toBeTruthy();
    expect(approximatelyMatch("notes", "oes")).toBeTruthy();
    expect(approximatelyMatch("notes", "ns")).toBeTruthy();
  });

  it("does not match when term is bigger than string", () => {
    expect(approximatelyMatch("big", "bigger")).toBeFalsy();
  });

  it("does not match when term is not found in string", () => {
    expect(approximatelyMatch("notes", "other")).toBeFalsy();
  });

  it("only matches when the whole term is matched", () => {
    expect(approximatelyMatch("my notes", "notess")).toBeFalsy();
  });
});
