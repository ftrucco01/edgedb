import { $ } from "edgedb";
import * as castMaps from "../castMaps.mjs";
import { $expressionify } from "./path.mjs";
import { getSharedParent } from "./set.mjs";


function set(..._exprs) {
  // if no arg
  // if arg
  //   return empty set
  // if object set
  //   merged objects
  // if primitive
  //   return shared parent of scalars
  if(_exprs.length === 0){
    return null;
  }

  const exprs = _exprs.map(expr => castMaps.literalToTypeSet(expr));

  return $expressionify({
    __kind__: $.ExpressionKind.Set,
    __element__: exprs
      .map(expr => expr.__element__)
      .reduce(getSharedParent),
    __cardinality__: $.cardinalityUtil.mergeCardinalitiesVariadic(
      exprs.map(expr => expr.__cardinality__)
    ),
    __exprs__: exprs,
  });

}


export { set };
