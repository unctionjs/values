import flip from "@unction/flip";
import append from "@unction/append";
import reduceValues from "@unction/reducevalues";
export default function values(functor) {
  return reduceValues(flip(append))([])(functor);
}
