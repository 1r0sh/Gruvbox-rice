"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propTypeArray = {
    key: 'propTypeArray',
    prefix: 'pta',
    body: ['PropTypes.array'],
    description: 'Array prop type',
};
const propTypeArrayRequired = {
    key: 'propTypeArrayRequired',
    prefix: 'ptar',
    body: ['PropTypes.array.isRequired'],
    description: 'Array prop type required',
};
const propTypeBool = {
    key: 'propTypeBool',
    prefix: 'ptb',
    body: ['PropTypes.bool'],
    description: 'Bool prop type',
};
const propTypeBoolRequired = {
    key: 'propTypeBoolRequired',
    prefix: 'ptbr',
    body: ['PropTypes.bool.isRequired'],
    description: 'Bool prop type required',
};
const propTypeFunc = {
    key: 'propTypeFunc',
    prefix: 'ptf',
    body: ['PropTypes.func'],
    description: 'Func prop type',
};
const propTypeFuncRequired = {
    key: 'propTypeFuncRequired',
    prefix: 'ptfr',
    body: ['PropTypes.func.isRequired'],
    description: 'Func prop type required',
};
const propTypeNumber = {
    key: 'propTypeNumber',
    prefix: 'ptn',
    body: ['PropTypes.number'],
    description: 'Number prop type',
};
const propTypeNumberRequired = {
    key: 'propTypeNumberRequired',
    prefix: 'ptnr',
    body: ['PropTypes.number.isRequired'],
    description: 'Number prop type required',
};
const propTypeObject = {
    key: 'propTypeObject',
    prefix: 'pto',
    body: ['PropTypes.object'],
    description: 'Object prop type',
};
const propTypeObjectRequired = {
    key: 'propTypeObjectRequired',
    prefix: 'ptor',
    body: ['PropTypes.object.isRequired'],
    description: 'Object prop type required',
};
const propTypeString = {
    key: 'propTypeString',
    prefix: 'pts',
    body: ['PropTypes.string'],
    description: 'String prop type',
};
const propTypeStringRequired = {
    key: 'propTypeStringRequired',
    prefix: 'ptsr',
    body: ['PropTypes.string.isRequired'],
    description: 'String prop type required',
};
const propTypeNode = {
    key: 'propTypeNode',
    prefix: 'ptnd',
    body: ['PropTypes.node'],
    description: 'Anything that can be rendered: numbers, strings, elements or an array',
};
const propTypeNodeRequired = {
    key: 'propTypeNodeRequired',
    prefix: 'ptndr',
    body: ['PropTypes.node.isRequired'],
    description: 'Anything that can be rendered: numbers, strings, elements or an array required',
};
const propTypeElement = {
    key: 'propTypeElement',
    prefix: 'ptel',
    body: ['PropTypes.element'],
    description: 'React element prop type',
};
const propTypeElementRequired = {
    key: 'propTypeElementRequired',
    prefix: 'ptelr',
    body: ['PropTypes.element.isRequired'],
    description: 'React element prop type required',
};
const propTypeInstanceOf = {
    key: 'propTypeInstanceOf',
    prefix: 'pti',
    body: ['PropTypes.instanceOf($0)'],
    description: 'Is an instance of a class prop type',
};
const propTypeInstanceOfRequired = {
    key: 'propTypeInstanceOfRequired',
    prefix: 'ptir',
    body: ['PropTypes.instanceOf($0).isRequired'],
    description: 'Is an instance of a class prop type required',
};
const propTypeEnum = {
    key: 'propTypeEnum',
    prefix: 'pte',
    body: ["PropTypes.oneOf(['$0'])"],
    description: 'Prop type limited to specific values by treating it as an enum',
};
const propTypeEnumRequired = {
    key: 'propTypeEnumRequired',
    prefix: 'pter',
    body: ["PropTypes.oneOf(['$0']).isRequired"],
    description: 'Prop type limited to specific values by treating it as an enum required',
};
const propTypeOneOfType = {
    key: 'propTypeOneOfType',
    prefix: 'ptet',
    body: ['PropTypes.oneOfType([', '  $0', '])'],
    description: 'An object that could be one of many types',
};
const propTypeOneOfTypeRequired = {
    key: 'propTypeOneOfTypeRequired',
    prefix: 'ptetr',
    body: ['PropTypes.oneOfType([', '  $0', ']).isRequired'],
    description: 'An object that could be one of many types required',
};
const propTypeArrayOf = {
    key: 'propTypeArrayOf',
    prefix: 'ptao',
    body: ['PropTypes.arrayOf($0)'],
    description: 'An array of a certain type',
};
const propTypeArrayOfRequired = {
    key: 'propTypeArrayOfRequired',
    prefix: 'ptaor',
    body: ['PropTypes.arrayOf($0).isRequired'],
    description: 'An array of a certain type required',
};
const propTypeObjectOf = {
    key: 'propTypeObjectOf',
    prefix: 'ptoo',
    body: ['PropTypes.objectOf($0)'],
    description: 'An object with property values of a certain type',
};
const propTypeObjectOfRequired = {
    key: 'propTypeObjectOfRequired',
    prefix: 'ptoor',
    body: ['PropTypes.objectOf($0).isRequired'],
    description: 'An object with property values of a certain type required',
};
const propTypeShape = {
    key: 'propTypeShape',
    prefix: 'ptsh',
    body: ['PropTypes.shape({', '  $0', '})'],
    description: 'An object taking on a particular shape',
};
const propTypeShapeRequired = {
    key: 'propTypeShapeRequired',
    prefix: 'ptshr',
    body: ['PropTypes.shape({', '  $0', '}).isRequired'],
    description: 'An object taking on a particular shape required',
};
const propTypeExact = {
    key: 'propTypeExact',
    prefix: 'ptex',
    body: ['PropTypes.exact({', '  $0', '})'],
    description: 'An object with warnings on extra properties',
};
const propTypeExactRequired = {
    key: 'propTypeExactRequired',
    prefix: 'ptexr',
    body: ['PropTypes.exact({', '  $0', '}).isRequired'],
    description: 'An object with warnings on extra properties required',
};
const propTypeAny = {
    key: 'propTypeAny',
    prefix: 'ptany',
    body: ['PropTypes.any'],
    description: 'Any prop type',
};
exports.default = [
    propTypeArray,
    propTypeArrayRequired,
    propTypeBool,
    propTypeBoolRequired,
    propTypeFunc,
    propTypeFuncRequired,
    propTypeNumber,
    propTypeNumberRequired,
    propTypeObject,
    propTypeObjectRequired,
    propTypeString,
    propTypeStringRequired,
    propTypeNode,
    propTypeNodeRequired,
    propTypeElement,
    propTypeElementRequired,
    propTypeInstanceOf,
    propTypeInstanceOfRequired,
    propTypeEnum,
    propTypeEnumRequired,
    propTypeOneOfType,
    propTypeOneOfTypeRequired,
    propTypeArrayOf,
    propTypeArrayOfRequired,
    propTypeObjectOf,
    propTypeObjectOfRequired,
    propTypeShape,
    propTypeShapeRequired,
    propTypeExact,
    propTypeExactRequired,
    propTypeAny,
];
//# sourceMappingURL=propTypes.js.map