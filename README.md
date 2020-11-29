# @unction/values

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<A>

Takes an iterable and returns it's values.

``` javascript
values({aaa: "111", bbb: "222"}) // ["111", "222"]
values(["aaa", "bbb"]) // ["aaa", "bbb"]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/values.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/values.svg?maxAge=2592000&style=flat-square
