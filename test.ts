
import values from "./index";

test("works", () => {
  expect(values({
    aaa: "111",
    bbb: "222",
  })).toEqual(["111", "222"]);
});

test("works", () => {
  expect(values([
    "aaa",
    "bbb",
  ])).toEqual([
    "aaa",
    "bbb",
  ]);
});
