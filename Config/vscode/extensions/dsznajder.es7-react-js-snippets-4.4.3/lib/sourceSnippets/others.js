"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const exportDefault = {
    key: 'exportDefault',
    prefix: 'exp',
    body: [`export default ${types_1.Placeholders.FirstTab}`],
};
const exportDestructing = {
    key: 'exportDestructing',
    prefix: 'exd',
    body: [
        `export { ${types_1.Placeholders.SecondTab} } from '${types_1.Placeholders.FirstTab}'`,
    ],
};
const exportAs = {
    key: 'exportAs',
    prefix: 'exa',
    body: [
        `export { ${types_1.Placeholders.SecondTab} as ${types_1.Placeholders.ThirdTab} } from '${types_1.Placeholders.FirstTab}'`,
    ],
};
const exportNamedFunction = {
    key: 'exportNamedFunction',
    prefix: 'enf',
    body: [
        `export const ${types_1.Placeholders.FirstTab} = (${types_1.Placeholders.SecondTab}) => {${types_1.Placeholders.ThirdTab}}`,
    ],
    description: 'Export named function',
};
const exportDefaultFunction = {
    key: 'exportDefaultFunction',
    prefix: 'edf',
    body: [
        `export default (${types_1.Placeholders.FirstTab}) => {${types_1.Placeholders.SecondTab}}`,
    ],
    description: 'Export default function',
};
const exportDefaultNamedFunction = {
    key: 'exportDefaultNamedFunction',
    prefix: 'ednf',
    body: [
        `export default function ${types_1.Placeholders.FirstTab}(${types_1.Placeholders.SecondTab}) {${types_1.Placeholders.ThirdTab}}`,
    ],
    description: 'Export default named function',
};
const method = {
    key: 'method',
    prefix: 'met',
    body: [
        `${types_1.Placeholders.FirstTab} = (${types_1.Placeholders.SecondTab}) => {${types_1.Placeholders.ThirdTab}}`,
    ],
    description: 'Creates a method inside a class',
};
const propertyGet = {
    key: 'propertyGet',
    prefix: 'pge',
    body: [
        `get ${types_1.Placeholders.FirstTab}() {`,
        `  return this.${types_1.Placeholders.SecondTab}`,
        '}',
    ],
    description: 'Creates a getter property inside a class',
};
const propertySet = {
    key: 'propertySet',
    prefix: 'pse',
    body: [
        `set ${types_1.Placeholders.FirstTab}(${types_1.Placeholders.SecondTab}) {${types_1.Placeholders.ThirdTab}}`,
    ],
    description: 'Creates a setter property inside a class',
};
const forEach = {
    key: 'forEach',
    prefix: 'fre',
    body: [
        `${types_1.Placeholders.FirstTab}.forEach(${types_1.Placeholders.SecondTab} => {${types_1.Placeholders.ThirdTab}})`,
    ],
    description: 'Creates a forEach statement',
};
const forOf = {
    key: 'forOf',
    prefix: 'fof',
    body: [
        `for(let ${types_1.Placeholders.FirstTab} of ${types_1.Placeholders.SecondTab}) {${types_1.Placeholders.ThirdTab}}`,
    ],
    description: 'Iterating over property names of iterable objects',
};
const forIn = {
    key: 'forIn',
    prefix: 'fin',
    body: [
        `for(let ${types_1.Placeholders.FirstTab} in ${types_1.Placeholders.SecondTab}) {${types_1.Placeholders.ThirdTab}}`,
    ],
    description: 'Iterating over property values of iterable objects',
};
const anonymousFunction = {
    key: 'anonymousFunction',
    prefix: 'anfn',
    body: [`(${types_1.Placeholders.FirstTab}) => { ${types_1.Placeholders.SecondTab} }`],
    description: 'Creates an anonymous function',
};
const namedFunction = {
    key: 'namedFunction',
    prefix: 'nfn',
    body: [
        `const ${types_1.Placeholders.FirstTab} = (${types_1.Placeholders.SecondTab}) => { ${types_1.Placeholders.ThirdTab} }`,
    ],
    description: 'Creates a named function',
};
const destructingObject = {
    key: 'destructingObject',
    prefix: 'dob',
    body: [`const {${types_1.Placeholders.SecondTab}} = ${types_1.Placeholders.FirstTab}`],
    description: 'Creates and assigns a local variable using object destructing',
};
const destructingArray = {
    key: 'destructingArray',
    prefix: 'dar',
    body: [`const [${types_1.Placeholders.SecondTab}] = ${types_1.Placeholders.FirstTab}`],
    description: 'Creates and assigns a local variable using array destructing',
};
const setInterval = {
    key: 'setInterval',
    prefix: 'sti',
    body: [
        `setInterval(() => { ${types_1.Placeholders.FirstTab} }, ${types_1.Placeholders.SecondTab})`,
    ],
    description: 'Executes the given function at specified intervals',
};
const setTimeOut = {
    key: 'setTimeOut',
    prefix: 'sto',
    body: [
        `setTimeout(() => { ${types_1.Placeholders.FirstTab} }, ${types_1.Placeholders.SecondTab})`,
    ],
    description: 'Executes the given function after the specified delay',
};
const promise = {
    key: 'promise',
    prefix: 'prom',
    body: [
        `return new Promise((resolve, reject) => { ${types_1.Placeholders.FirstTab} })`,
    ],
    description: 'Creates and returns a new Promise in the standard ES7 syntax',
};
const destructProps = {
    key: 'destructProps',
    prefix: 'cp',
    body: [`const { ${types_1.Placeholders.FirstTab} } = this.props`],
    description: 'Creates and assigns a local variable using props destructing',
};
const destructState = {
    key: 'destructState',
    prefix: 'cs',
    body: [`const { ${types_1.Placeholders.FirstTab} } = this.state`],
    description: 'Creates and assigns a local variable using state destructing',
};
const classConstructor = {
    key: 'classConstructor',
    prefix: 'rconst',
    body: [
        'constructor(props) {',
        '  super(props)',
        '',
        '  this.state = {',
        `     ${types_1.Placeholders.FirstTab}`,
        '  }',
        '}',
    ],
    description: "Adds a default constructor for it('', () => {})the class that contains props as arguments",
};
const emptyState = {
    key: 'emptyState',
    prefix: 'est',
    body: [`state = { ${types_1.Placeholders.FirstTab} }`],
    description: 'Creates empty state object. To be used in a constructor.',
};
const componentDidMount = {
    key: 'componentDidMount',
    prefix: 'cdm',
    body: [`componentDidMount() { ${types_1.Placeholders.FirstTab} }`],
    description: 'Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.',
};
const shouldComponentUpdate = {
    key: 'shouldComponentUpdate',
    prefix: 'scu',
    body: [
        `shouldComponentUpdate(nextProps, nextState) { ${types_1.Placeholders.FirstTab} }`,
    ],
    description: 'Invoked before rendering when new props or state are being received. ',
};
const componentDidUpdate = {
    key: 'componentDidUpdate',
    prefix: 'cdup',
    body: [
        `componentDidUpdate(prevProps, prevState) { ${types_1.Placeholders.FirstTab}} `,
    ],
    description: "Invoked immediately after the component's updates are flushed to the DOM.",
};
const componentWillUnmount = {
    key: 'componentWillUnmount',
    prefix: 'cwun',
    body: [`componentWillUnmount() {${types_1.Placeholders.FirstTab} }`],
    description: 'Invoked immediately before a component is unmounted from the DOM.',
};
const getDerivedStateFromProps = {
    key: 'getDerivedStateFromProps',
    prefix: 'gdsfp',
    body: [
        `static getDerivedStateFromProps(props, state) {${types_1.Placeholders.FirstTab}}`,
    ],
    description: 'Invoked right before calling the render method, both on the initial mount and on subsequent updates.',
};
const getSnapshotBeforeUpdate = {
    key: 'getSnapshotBeforeUpdate',
    prefix: 'gsbu',
    body: [
        `getSnapshotBeforeUpdate = (prevProps, prevState) => {${types_1.Placeholders.FirstTab}}`,
    ],
    description: 'Called right before mutations are made (e.g. before the DOM is updated)',
};
const createContext = {
    key: 'createContext',
    prefix: 'rcontext',
    body: [`const ${types_1.Placeholders.FirstTab} = React.createContext()`],
    description: 'Create React context',
};
const createRef = {
    key: 'createRef',
    prefix: 'cref',
    body: [`this.${types_1.Placeholders.FirstTab}Ref = React.createRef()`],
    description: 'Create ref statement used inside constructor',
};
const componentSetStateObject = {
    key: 'componentSetStateObject',
    prefix: 'sst',
    body: [`this.setState({${types_1.Placeholders.FirstTab}})`],
    description: 'Performs a shallow merge of nextState into current state',
};
const componentSetStateFunc = {
    key: 'componentSetStateFunc',
    prefix: 'ssf',
    body: [
        `this.setState((state, props) => { return { ${types_1.Placeholders.FirstTab} }})`,
    ],
    description: 'Performs a shallow merge of nextState into current state',
};
const componentProps = {
    key: 'componentProps',
    prefix: 'props',
    body: [`this.props.${types_1.Placeholders.FirstTab}`],
    description: "Access component's props",
};
const componentState = {
    key: 'componentState',
    prefix: 'state',
    body: [`this.state.${types_1.Placeholders.FirstTab}`],
};
const bindThis = {
    key: 'bindThis',
    prefix: 'bnd',
    body: [
        `this.${types_1.Placeholders.FirstTab} = this.${types_1.Placeholders.FirstTab}.bind(this)`,
    ],
    description: 'Binds this to a method',
};
const commentBigBlock = {
    key: 'commentBigBlock',
    prefix: 'cmmb',
    body: ['/**', ` * ${types_1.Placeholders.FirstTab}`, ' */'],
};
const hocComponentWithRedux = {
    key: 'hocComponentWithRedux',
    prefix: 'hocredux',
    body: [
        "import React from 'react'",
        "import { connect } from 'react-redux'",
        "import PropTypes from 'prop-types'",
        '',
        'export const mapStateToProps = state => ({})',
        '',
        'export const mapDispatchToProps = {}',
        '',
        `export const ${types_1.Placeholders.FirstTab} = (WrappedComponent) => {`,
        '  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />',
        '',
        '  hocComponent.propTypes = {}',
        '',
        '  return hocComponent',
        '}',
        '',
        `export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(${types_1.Placeholders.FirstTab}(WrapperComponent))`,
        '',
    ],
};
const hocComponent = {
    key: 'hocComponent',
    prefix: 'hoc',
    body: [
        "import React from 'react'",
        "import PropTypes from 'prop-types'",
        '',
        'export default (WrappedComponent) => {',
        '  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />',
        '',
        '  hocComponent.propTypes = {}',
        '',
        '  return hocComponent',
        '}',
        '',
    ],
};
const typeofSnippet = {
    key: 'typeofSnippet',
    prefix: 'tpf',
    body: [`typeof ${types_1.Placeholders.FirstTab}`],
};
exports.default = [
    exportDefault,
    exportDestructing,
    exportAs,
    exportNamedFunction,
    exportDefaultFunction,
    exportDefaultNamedFunction,
    method,
    propertyGet,
    propertySet,
    forEach,
    forOf,
    forIn,
    anonymousFunction,
    namedFunction,
    destructingObject,
    destructingArray,
    setInterval,
    setTimeOut,
    promise,
    destructProps,
    destructState,
    classConstructor,
    emptyState,
    componentDidMount,
    shouldComponentUpdate,
    componentDidUpdate,
    componentWillUnmount,
    getDerivedStateFromProps,
    getSnapshotBeforeUpdate,
    createContext,
    createRef,
    componentSetStateObject,
    componentSetStateFunc,
    componentProps,
    componentState,
    bindThis,
    commentBigBlock,
    hocComponentWithRedux,
    hocComponent,
    typeofSnippet,
];
//# sourceMappingURL=others.js.map