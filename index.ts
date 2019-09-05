import flip from "@unction/flip";
import append from "@unction/append";
import reduceValues from "@unction/reducevalues";
import {EnumerableType} from "./types";

export default function values<A> (enumerable: EnumerableType<A>): Array<A> {
  return reduceValues(flip(append))([])(enumerable);
}
