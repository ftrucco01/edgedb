const std = {
  "JsonEmpty": {
    ReturnEmpty: "ReturnEmpty",
    ReturnTarget: "ReturnTarget",
    Error: "Error",
    UseNull: "UseNull",
    DeleteKey: "DeleteKey",
  },
}
const schema = {
  "AccessKind": {
    Select: "Select",
    UpdateRead: "UpdateRead",
    UpdateWrite: "UpdateWrite",
    Delete: "Delete",
    Insert: "Insert",
  },
  "AccessPolicyAction": {
    Allow: "Allow",
    Deny: "Deny",
  },
  "Cardinality": {
    One: "One",
    Many: "Many",
  },
  "OperatorKind": {
    Infix: "Infix",
    Postfix: "Postfix",
    Prefix: "Prefix",
    Ternary: "Ternary",
  },
  "ParameterKind": {
    VariadicParam: "VariadicParam",
    NamedOnlyParam: "NamedOnlyParam",
    PositionalParam: "PositionalParam",
  },
  "SourceDeleteAction": {
    DeleteTarget: "DeleteTarget",
    Allow: "Allow",
    DeleteTargetIfOrphan: "DeleteTargetIfOrphan",
  },
  "TargetDeleteAction": {
    Restrict: "Restrict",
    DeleteSource: "DeleteSource",
    Allow: "Allow",
    DeferredRestrict: "DeferredRestrict",
  },
  "TypeModifier": {
    SetOfType: "SetOfType",
    OptionalType: "OptionalType",
    SingletonType: "SingletonType",
  },
  "Volatility": {
    Immutable: "Immutable",
    Stable: "Stable",
    Volatile: "Volatile",
  },
}
const cfg = {
  "AllowBareDDL": {
    AlwaysAllow: "AlwaysAllow",
    NeverAllow: "NeverAllow",
  },
  "ConnectionTransport": {
    TCP: "TCP",
    HTTP: "HTTP",
  },
}
const sys = {
  "TransactionIsolation": {
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable",
  },
  "VersionStage": {
    dev: "dev",
    alpha: "alpha",
    beta: "beta",
    rc: "rc",
    final: "final",
  },
}


export { std, schema, cfg, sys };
