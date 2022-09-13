import { $ } from "edgedb";
import * as _ from "../imports.mjs";
const $TransactionIsolationλEnum = {
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
}
const TransactionIsolation = $.makeType(_.spec, "2013e385-1509-11ed-8626-19df6b6c4b5d", _.syntax.literal);

const $VersionStageλEnum = {
  dev: "dev",
  alpha: "alpha",
  beta: "beta",
  rc: "rc",
  final: "final",
}
const VersionStage = $.makeType(_.spec, "2014a567-1509-11ed-8569-6db1b69cea1e", _.syntax.literal);

const $SystemObject = $.makeType(_.spec, "201565a7-1509-11ed-8e64-f71c5ffcae60", _.syntax.literal);

const SystemObject= _.syntax.$PathNode($.$toSet($SystemObject, $.Cardinality.Many), null, true);

const $Database = $.makeType(_.spec, "20377b45-1509-11ed-a950-3f4924903111", _.syntax.literal);

const Database= _.syntax.$PathNode($.$toSet($Database, $.Cardinality.Many), null, true);

const $ExtensionPackage = $.makeType(_.spec, "205d73c0-1509-11ed-a676-6f788e87a1d3", _.syntax.literal);

const ExtensionPackage= _.syntax.$PathNode($.$toSet($ExtensionPackage, $.Cardinality.Many), null, true);

const $Role = $.makeType(_.spec, "208965a8-1509-11ed-9bcd-07968413fc05", _.syntax.literal);

const Role= _.syntax.$PathNode($.$toSet($Role, $.Cardinality.Many), null, true);

function get_version(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_version', args, _.spec, [
    {args: [], returnTypeId: "9f9e9f92-ac0c-dd9a-aac9-d0758136f34b"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_version",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_version_as_str(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_version_as_str', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_version_as_str",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_instance_name(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_instance_name', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_instance_name",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_transaction_isolation(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_transaction_isolation', args, _.spec, [
    {args: [], returnTypeId: "2013e385-1509-11ed-8626-19df6b6c4b5d"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_transaction_isolation",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_current_database(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_current_database', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_current_database",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



export { $TransactionIsolationλEnum, TransactionIsolation, $VersionStageλEnum, VersionStage, $SystemObject, SystemObject, $Database, Database, $ExtensionPackage, ExtensionPackage, $Role, Role };

const __defaultExports = {
  "TransactionIsolation": TransactionIsolation,
  "VersionStage": VersionStage,
  "SystemObject": SystemObject,
  "Database": Database,
  "ExtensionPackage": ExtensionPackage,
  "Role": Role,
  "get_version": get_version,
  "get_version_as_str": get_version_as_str,
  "get_instance_name": get_instance_name,
  "get_transaction_isolation": get_transaction_isolation,
  "get_current_database": get_current_database
};
export default __defaultExports;
