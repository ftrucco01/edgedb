import { $ } from "edgedb";
import * as _ from "../imports.mjs";
const $AccessKindλEnum = {
  Select: "Select",
  UpdateRead: "UpdateRead",
  UpdateWrite: "UpdateWrite",
  Delete: "Delete",
  Insert: "Insert",
}
const AccessKind = $.makeType(_.spec, "190cdbe1-1509-11ed-819a-cd1eed707bbf", _.syntax.literal);

const $AccessPolicyActionλEnum = {
  Allow: "Allow",
  Deny: "Deny",
}
const AccessPolicyAction = $.makeType(_.spec, "190c21dc-1509-11ed-9f95-a32f5826b073", _.syntax.literal);

const $CardinalityλEnum = {
  One: "One",
  Many: "Many",
}
const Cardinality = $.makeType(_.spec, "19071a68-1509-11ed-9295-9b5b7d772a8e", _.syntax.literal);

const $OperatorKindλEnum = {
  Infix: "Infix",
  Postfix: "Postfix",
  Prefix: "Prefix",
  Ternary: "Ternary",
}
const OperatorKind = $.makeType(_.spec, "19094bb6-1509-11ed-aeca-eb8607be9c01", _.syntax.literal);

const $ParameterKindλEnum = {
  VariadicParam: "VariadicParam",
  NamedOnlyParam: "NamedOnlyParam",
  PositionalParam: "PositionalParam",
}
const ParameterKind = $.makeType(_.spec, "190ab98f-1509-11ed-8a84-d360dcc3f2bd", _.syntax.literal);

const $SourceDeleteActionλEnum = {
  DeleteTarget: "DeleteTarget",
  Allow: "Allow",
  DeleteTargetIfOrphan: "DeleteTargetIfOrphan",
}
const SourceDeleteAction = $.makeType(_.spec, "190897f5-1509-11ed-94b1-03635aedeb08", _.syntax.literal);

const $TargetDeleteActionλEnum = {
  Restrict: "Restrict",
  DeleteSource: "DeleteSource",
  Allow: "Allow",
  DeferredRestrict: "DeferredRestrict",
}
const TargetDeleteAction = $.makeType(_.spec, "1907dbb0-1509-11ed-b0d6-210673eb9e5d", _.syntax.literal);

const $TypeModifierλEnum = {
  SetOfType: "SetOfType",
  OptionalType: "OptionalType",
  SingletonType: "SingletonType",
}
const TypeModifier = $.makeType(_.spec, "190b6e5c-1509-11ed-887d-1f83b1df1e19", _.syntax.literal);

const $VolatilityλEnum = {
  Immutable: "Immutable",
  Stable: "Stable",
  Volatile: "Volatile",
}
const Volatility = $.makeType(_.spec, "190a05dc-1509-11ed-b2c8-19244213c6ab", _.syntax.literal);

const $Object_190dbb9a150911edb29f09418a943953 = $.makeType(_.spec, "190dbb9a-1509-11ed-b29f-09418a943953", _.syntax.literal);

const Object_190dbb9a150911edb29f09418a943953= _.syntax.$PathNode($.$toSet($Object_190dbb9a150911edb29f09418a943953, $.Cardinality.Many), null, true);

const $SubclassableObject = $.makeType(_.spec, "1919389c-1509-11ed-a94e-9b9437308d5e", _.syntax.literal);

const SubclassableObject= _.syntax.$PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);

const $InheritingObject = $.makeType(_.spec, "1a7d95f9-1509-11ed-81d7-1ff0ab507f3d", _.syntax.literal);

const InheritingObject= _.syntax.$PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);

const $AnnotationSubject = $.makeType(_.spec, "1a527510-1509-11ed-88da-a54a0b0e806f", _.syntax.literal);

const AnnotationSubject= _.syntax.$PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);

const $AccessPolicy = $.makeType(_.spec, "1bc2c249-1509-11ed-997f-4970d2ba775a", _.syntax.literal);

const AccessPolicy= _.syntax.$PathNode($.$toSet($AccessPolicy, $.Cardinality.Many), null, true);

const $Alias = $.makeType(_.spec, "1bf78a94-1509-11ed-bc60-452c7790909d", _.syntax.literal);

const Alias= _.syntax.$PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);

const $Annotation = $.makeType(_.spec, "1a5ff2ea-1509-11ed-aca5-0de72b17886c", _.syntax.literal);

const Annotation= _.syntax.$PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);

const $Type = $.makeType(_.spec, "192aa42c-1509-11ed-8eb3-69bd0c5b4404", _.syntax.literal);

const Type= _.syntax.$PathNode($.$toSet($Type, $.Cardinality.Many), null, true);

const $PrimitiveType = $.makeType(_.spec, "196aba29-1509-11ed-9f42-6f0892c19062", _.syntax.literal);

const PrimitiveType= _.syntax.$PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);

const $CollectionType = $.makeType(_.spec, "19b264c0-1509-11ed-9979-e5c8392860b8", _.syntax.literal);

const CollectionType= _.syntax.$PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);

const $Array = $.makeType(_.spec, "19cade58-1509-11ed-93f6-61f339ef3ebc", _.syntax.literal);

const Array= _.syntax.$PathNode($.$toSet($Array, $.Cardinality.Many), null, true);

const $CallableObject = $.makeType(_.spec, "1ab7411c-1509-11ed-a6f9-09747b2da0f9", _.syntax.literal);

const CallableObject= _.syntax.$PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);

const $VolatilitySubject = $.makeType(_.spec, "1ada8ec2-1509-11ed-a4b1-2b93edbe7865", _.syntax.literal);

const VolatilitySubject= _.syntax.$PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);

const $Cast = $.makeType(_.spec, "1f08040c-1509-11ed-b6d1-8b11ebe1ee51", _.syntax.literal);

const Cast= _.syntax.$PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);

const $ConsistencySubject = $.makeType(_.spec, "1b26e723-1509-11ed-977d-593fc544113d", _.syntax.literal);

const ConsistencySubject= _.syntax.$PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);

const $Constraint = $.makeType(_.spec, "1aec4a12-1509-11ed-8f95-d7d82e8c1b79", _.syntax.literal);

const Constraint= _.syntax.$PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);

const $Delta = $.makeType(_.spec, "1a40f0e8-1509-11ed-86a8-13c1648cbcd5", _.syntax.literal);

const Delta= _.syntax.$PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);

const $Extension = $.makeType(_.spec, "1f8d4aec-1509-11ed-82ff-8751bd8e24e4", _.syntax.literal);

const Extension= _.syntax.$PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);

const $Function = $.makeType(_.spec, "1ea3cf71-1509-11ed-88d9-5bacc0d58cdd", _.syntax.literal);

const Function= _.syntax.$PathNode($.$toSet($Function, $.Cardinality.Many), null, true);

const $Global = $.makeType(_.spec, "1e791b81-1509-11ed-8776-07fba53d5ba2", _.syntax.literal);

const Global= _.syntax.$PathNode($.$toSet($Global, $.Cardinality.Many), null, true);

const $Index = $.makeType(_.spec, "1b43b52b-1509-11ed-93f0-0f689d7debec", _.syntax.literal);

const Index= _.syntax.$PathNode($.$toSet($Index, $.Cardinality.Many), null, true);

const $Pointer = $.makeType(_.spec, "1b85edd6-1509-11ed-b7e0-9dda7b389380", _.syntax.literal);

const Pointer= _.syntax.$PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);

const $Source = $.makeType(_.spec, "1b6dff33-1509-11ed-a4ce-ff66042a9a7c", _.syntax.literal);

const Source= _.syntax.$PathNode($.$toSet($Source, $.Cardinality.Many), null, true);

const $Link = $.makeType(_.spec, "1d6471d5-1509-11ed-b91c-b3f546077537", _.syntax.literal);

const Link= _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);

const $Migration = $.makeType(_.spec, "1f35996c-1509-11ed-84c2-eb1c387998e3", _.syntax.literal);

const Migration= _.syntax.$PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);

const $Module = $.makeType(_.spec, "195e436e-1509-11ed-9f5a-a909e51e9fb5", _.syntax.literal);

const Module= _.syntax.$PathNode($.$toSet($Module, $.Cardinality.Many), null, true);

const $ObjectType = $.makeType(_.spec, "1c59eb43-1509-11ed-ada0-07ee4a022f7a", _.syntax.literal);

const ObjectType= _.syntax.$PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);

const $Operator = $.makeType(_.spec, "1ed7572c-1509-11ed-835d-0b9ba349e0d2", _.syntax.literal);

const Operator= _.syntax.$PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);

const $Parameter = $.makeType(_.spec, "1a9e642b-1509-11ed-862b-5945f4cad8f7", _.syntax.literal);

const Parameter= _.syntax.$PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);

const $Property = $.makeType(_.spec, "1dbecf26-1509-11ed-b8da-2b1e25d863da", _.syntax.literal);

const Property= _.syntax.$PathNode($.$toSet($Property, $.Cardinality.Many), null, true);

const $PseudoType = $.makeType(_.spec, "193ce78e-1509-11ed-b21c-f32feaa4fe5d", _.syntax.literal);

const PseudoType= _.syntax.$PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);

const $Range = $.makeType(_.spec, "1a21871c-1509-11ed-a774-bb461af6abe4", _.syntax.literal);

const Range= _.syntax.$PathNode($.$toSet($Range, $.Cardinality.Many), null, true);

const $ScalarType = $.makeType(_.spec, "1c14ef62-1509-11ed-9810-cdb00e2aad3e", _.syntax.literal);

const ScalarType= _.syntax.$PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);

const $Tuple = $.makeType(_.spec, "19f86a83-1509-11ed-800a-97e3427bd311", _.syntax.literal);

const Tuple= _.syntax.$PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);

const $TupleElement = $.makeType(_.spec, "19eae3db-1509-11ed-8fbf-23fb4e12cb4b", _.syntax.literal);

const TupleElement= _.syntax.$PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);



export { $AccessKindλEnum, AccessKind, $AccessPolicyActionλEnum, AccessPolicyAction, $CardinalityλEnum, Cardinality, $OperatorKindλEnum, OperatorKind, $ParameterKindλEnum, ParameterKind, $SourceDeleteActionλEnum, SourceDeleteAction, $TargetDeleteActionλEnum, TargetDeleteAction, $TypeModifierλEnum, TypeModifier, $VolatilityλEnum, Volatility, $Object_190dbb9a150911edb29f09418a943953, Object_190dbb9a150911edb29f09418a943953, $SubclassableObject, SubclassableObject, $InheritingObject, InheritingObject, $AnnotationSubject, AnnotationSubject, $AccessPolicy, AccessPolicy, $Alias, Alias, $Annotation, Annotation, $Type, Type, $PrimitiveType, PrimitiveType, $CollectionType, CollectionType, $Array, Array, $CallableObject, CallableObject, $VolatilitySubject, VolatilitySubject, $Cast, Cast, $ConsistencySubject, ConsistencySubject, $Constraint, Constraint, $Delta, Delta, $Extension, Extension, $Function, Function, $Global, Global, $Index, Index, $Pointer, Pointer, $Source, Source, $Link, Link, $Migration, Migration, $Module, Module, $ObjectType, ObjectType, $Operator, Operator, $Parameter, Parameter, $Property, Property, $PseudoType, PseudoType, $Range, Range, $ScalarType, ScalarType, $Tuple, Tuple, $TupleElement, TupleElement };

const __defaultExports = {
  "AccessKind": AccessKind,
  "AccessPolicyAction": AccessPolicyAction,
  "Cardinality": Cardinality,
  "OperatorKind": OperatorKind,
  "ParameterKind": ParameterKind,
  "SourceDeleteAction": SourceDeleteAction,
  "TargetDeleteAction": TargetDeleteAction,
  "TypeModifier": TypeModifier,
  "Volatility": Volatility,
  "Object": Object_190dbb9a150911edb29f09418a943953,
  "SubclassableObject": SubclassableObject,
  "InheritingObject": InheritingObject,
  "AnnotationSubject": AnnotationSubject,
  "AccessPolicy": AccessPolicy,
  "Alias": Alias,
  "Annotation": Annotation,
  "Type": Type,
  "PrimitiveType": PrimitiveType,
  "CollectionType": CollectionType,
  "Array": Array,
  "CallableObject": CallableObject,
  "VolatilitySubject": VolatilitySubject,
  "Cast": Cast,
  "ConsistencySubject": ConsistencySubject,
  "Constraint": Constraint,
  "Delta": Delta,
  "Extension": Extension,
  "Function": Function,
  "Global": Global,
  "Index": Index,
  "Pointer": Pointer,
  "Source": Source,
  "Link": Link,
  "Migration": Migration,
  "Module": Module,
  "ObjectType": ObjectType,
  "Operator": Operator,
  "Parameter": Parameter,
  "Property": Property,
  "PseudoType": PseudoType,
  "Range": Range,
  "ScalarType": ScalarType,
  "Tuple": Tuple,
  "TupleElement": TupleElement
};
export default __defaultExports;
