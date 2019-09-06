
import values from "./index";

test(() => {
  expect(values({
    aaa: "111",
    bbb: "222",
  })).toEqual(["111", "222"]);
});

test(() => {
  expect(values([
    "aaa",
    "bbb",
  ])).toEqual([
    "aaa",
    "bbb",
  ]);
});
