/* eslint-disable flowtype/require-return-type */
import {test} from "tap";

import values from "./index";

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
