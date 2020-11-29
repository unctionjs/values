import flip from "@unction/flip";
import append from "@unction/append";
import reduceValues from "@unction/reducevalues";

export default function values<A> (enumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> {
  return reduceValues(flip(append))([])(enumerable);
}
