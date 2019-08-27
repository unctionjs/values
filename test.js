
import {test} from "tap";

import values from "./";

test(({same, end}) => {
  same(
    values({
      aaa: "111",
      bbb: "222",
    }),
    ["111", "222"]
  );

  end();
});

test(({same, end}) => {
  same(
    values([
      "aaa",
      "bbb",
    ]),
    [
      "aaa",
      "bbb",
    ]
  );

  end();
});
