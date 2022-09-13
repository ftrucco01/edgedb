import { $ } from "edgedb";
import * as _ from "../imports.mjs";
const $AllowBareDDLλEnum = {
  AlwaysAllow: "AlwaysAllow",
  NeverAllow: "NeverAllow",
}
const AllowBareDDL = $.makeType(_.spec, "20e92d24-1509-11ed-89ed-4f127ab896d1", _.syntax.literal);

const $ConnectionTransportλEnum = {
  TCP: "TCP",
  HTTP: "HTTP",
}
const ConnectionTransport = $.makeType(_.spec, "20e9e844-1509-11ed-820d-9991510ac8d3", _.syntax.literal);

const memory = $.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

const $ConfigObject = $.makeType(_.spec, "20eadb31-1509-11ed-94a7-c57eebb06949", _.syntax.literal);

const ConfigObject= _.syntax.$PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null, true);

const $AbstractConfig = $.makeType(_.spec, "214b89c3-1509-11ed-b187-bdbef140519d", _.syntax.literal);

const AbstractConfig= _.syntax.$PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null, true);

const $Auth = $.makeType(_.spec, "2130f0e7-1509-11ed-bcb9-c35ca2b9abf7", _.syntax.literal);

const Auth= _.syntax.$PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);

const $AuthMethod = $.makeType(_.spec, "20f74848-1509-11ed-84fb-a70ce0427c5f", _.syntax.literal);

const AuthMethod= _.syntax.$PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);

const $Config = $.makeType(_.spec, "217d7076-1509-11ed-a044-c3bbb40ef7b9", _.syntax.literal);

const Config= _.syntax.$PathNode($.$toSet($Config, $.Cardinality.Many), null, true);

const $DatabaseConfig = $.makeType(_.spec, "21e67f48-1509-11ed-b2cd-5349fa82be54", _.syntax.literal);

const DatabaseConfig= _.syntax.$PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);

const $InstanceConfig = $.makeType(_.spec, "21b2ff80-1509-11ed-8d99-ab18ccb87ae3", _.syntax.literal);

const InstanceConfig= _.syntax.$PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);

const $JWT = $.makeType(_.spec, "21216e1b-1509-11ed-b0c6-6b79c36bd0a7", _.syntax.literal);

const JWT= _.syntax.$PathNode($.$toSet($JWT, $.Cardinality.Many), null, true);

const $SCRAM = $.makeType(_.spec, "21122108-1509-11ed-8aed-ddd6e1a6dafe", _.syntax.literal);

const SCRAM= _.syntax.$PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);

const $Trust = $.makeType(_.spec, "21049986-1509-11ed-8108-5fb9538bf5e3", _.syntax.literal);

const Trust= _.syntax.$PathNode($.$toSet($Trust, $.Cardinality.Many), null, true);

function get_config_json(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
    {args: [], namedArgs: {"sources": {typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: true, setoftype: false, variadic: false}, "max_source": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "cfg::get_config_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



export { $AllowBareDDLλEnum, AllowBareDDL, $ConnectionTransportλEnum, ConnectionTransport, memory, $ConfigObject, ConfigObject, $AbstractConfig, AbstractConfig, $Auth, Auth, $AuthMethod, AuthMethod, $Config, Config, $DatabaseConfig, DatabaseConfig, $InstanceConfig, InstanceConfig, $JWT, JWT, $SCRAM, SCRAM, $Trust, Trust };

const __defaultExports = {
  "AllowBareDDL": AllowBareDDL,
  "ConnectionTransport": ConnectionTransport,
  "memory": memory,
  "ConfigObject": ConfigObject,
  "AbstractConfig": AbstractConfig,
  "Auth": Auth,
  "AuthMethod": AuthMethod,
  "Config": Config,
  "DatabaseConfig": DatabaseConfig,
  "InstanceConfig": InstanceConfig,
  "JWT": JWT,
  "SCRAM": SCRAM,
  "Trust": Trust,
  "get_config_json": get_config_json
};
export default __defaultExports;
