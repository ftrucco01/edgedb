import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export declare type $ArticleλShape = $.typeutil.flatten<_std.$Object_188bed8e150911eda3afcf443ef691deλShape & {
  "body": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "author": $.PropertyDesc<_std.$json, $.Cardinality.AtMostOne, false, false, false, false>;
  "createdAt": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "favorited": $.PropertyDesc<_std.$bool, $.Cardinality.AtMostOne, false, false, false, false>;
  "favoritesCount": $.PropertyDesc<_std.$int16, $.Cardinality.AtMostOne, false, false, false, false>;
  "slug": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "updatedAt": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "tagList": $.PropertyDesc<$.ArrayType<_std.$str>, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
declare type $Article = $.ObjectType<"default::Article", $ArticleλShape, null>;
declare const $Article: $Article

declare const Article: $.$expr_PathNode<$.TypeSet<$Article, $.Cardinality.Many>, null, true> 

export declare type $PersonλShape = $.typeutil.flatten<_std.$Object_188bed8e150911eda3afcf443ef691deλShape & {
  "first_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "last_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
}>;
declare type $Person = $.ObjectType<"default::Person", $PersonλShape, null>;
declare const $Person: $Person

declare const Person: $.$expr_PathNode<$.TypeSet<$Person, $.Cardinality.Many>, null, true> 



export { $Article, Article, $Person, Person };

declare type __defaultExports = {
  "Article": typeof Article;
  "Person": typeof Person
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
