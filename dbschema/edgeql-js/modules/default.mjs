import { $ } from "edgedb";
import * as _ from "../imports.mjs";
const $Article = $.makeType(_.spec, "cb1080f6-24fd-11ed-afba-633461322157", _.syntax.literal);

const Article= _.syntax.$PathNode($.$toSet($Article, $.Cardinality.Many), null, true);

const $Person = $.makeType(_.spec, "3d4c3345-24f9-11ed-9073-1f7b7141602b", _.syntax.literal);

const Person= _.syntax.$PathNode($.$toSet($Person, $.Cardinality.Many), null, true);



export { $Article, Article, $Person, Person };

const __defaultExports = {
  "Article": Article,
  "Person": Person
};
export default __defaultExports;
