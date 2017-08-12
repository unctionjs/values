/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import values from "./source.js"

test(({same, end}) => {
  same(
    values({
      aaa: "111",
      bbb: "222",
    }),
    ["111", "222"]
  )

  end()
})
