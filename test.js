/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import values from "./source.js"

test(({same, end}) => {
  same(
    values({
      aaa: "bbb",
      bbb: "aaa",
    }),
    ["bbb", "aaa"]
  )

  end()
})
