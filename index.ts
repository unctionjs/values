import flip from "@unction/flip";
import append from "@unction/append";
import reduceValues from "@unction/reducevalues";

export default function values<A> (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string): Array<A> {
  return reduceValues(flip(append))([])(enumerable);
}
