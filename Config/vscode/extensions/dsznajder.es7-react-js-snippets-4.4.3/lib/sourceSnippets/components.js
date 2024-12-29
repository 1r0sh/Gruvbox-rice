"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const sharedSnippets_1 = require("./sharedSnippets");
const reactClassComponent = {
    key: 'reactClassComponent',
    prefix: 'rcc',
    body: [
        ...sharedSnippets_1.reactComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends Component {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        '',
    ],
    description: 'Creates a React component class with ES7 module system',
};
const reactClassExportComponent = {
    key: 'reactClassExportComponent',
    prefix: 'rce',
    body: [
        ...sharedSnippets_1.reactComponent,
        '',
        `export class ${types_1.Placeholders.FileName} extends Component {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React component class with ES7 module system',
};
const reactFunctionalExportComponent = {
    key: 'reactFunctionalExportComponent',
    prefix: 'rfce',
    body: [
        ...sharedSnippets_1.react,
        '',
        `function ${types_1.Placeholders.FileName}() {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Functional Component with ES7 module system',
};
const reactFunctionalComponent = {
    key: 'reactFunctionalComponent',
    prefix: 'rfc',
    body: [
        ...sharedSnippets_1.react,
        '',
        `export default function ${types_1.Placeholders.FileName}() {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
    ],
    description: 'Creates a React Functional Component with ES7 module system',
};
const reactFunctionalComponentWithPropTypes = {
    key: 'reactFunctionalComponentWithPropTypes',
    prefix: 'rfcp',
    body: [
        ...sharedSnippets_1.reactPropTypes,
        '',
        `function ${types_1.Placeholders.FileName}(props) {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
        `${types_1.Placeholders.FileName}.propTypes = {}`,
        ...sharedSnippets_1.exportDefault,
        '',
    ],
    description: 'Creates a React Functional Component with ES7 module system with PropTypes',
};
const reactArrowFunctionExportComponent = {
    key: 'reactArrowFunctionExportComponent',
    prefix: 'rafce',
    body: [
        ...sharedSnippets_1.react,
        '',
        `const ${types_1.Placeholders.FileName} = () => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Arrow Function Component with ES7 module system',
};
const reactArrowFunctionComponent = {
    key: 'reactArrowFunctionComponent',
    prefix: 'rafc',
    body: [
        ...sharedSnippets_1.react,
        '',
        `export const ${types_1.Placeholders.FileName} = () => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
    ],
    description: 'Creates a React Arrow Function Component with ES7 module system',
};
const reactArrowFunctionComponentWithPropTypes = {
    key: 'reactArrowFunctionComponentWithPropTypes',
    prefix: 'rafcp',
    body: [
        ...sharedSnippets_1.reactPropTypes,
        '',
        `const ${types_1.Placeholders.FileName} = props => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
        `${types_1.Placeholders.FileName}.propTypes = {}`,
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Arrow Function Component with ES7 module system with PropTypes',
};
const reactClassExportComponentWithPropTypes = {
    key: 'reactClassExportComponentWithPropTypes',
    prefix: 'rcep',
    body: [
        "import PropTypes from 'prop-types'",
        ...sharedSnippets_1.reactComponent,
        '',
        `export class ${types_1.Placeholders.FileName} extends Component {`,
        '  static propTypes = {}',
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React component class with ES7 module system',
};
const reactClassPureComponent = {
    key: 'reactClassPureComponent',
    prefix: 'rpc',
    body: [
        ...sharedSnippets_1.reactPureComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends PureComponent {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        '',
    ],
    description: 'Creates a React pure component class with ES7 module system',
};
const reactClassExportPureComponent = {
    key: 'reactClassExportPureComponent',
    prefix: 'rpce',
    body: [
        ...sharedSnippets_1.reactPureComponent,
        '',
        `export class ${types_1.Placeholders.FileName} extends PureComponent {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React pure component class with ES7 module system export',
};
const reactClassPureComponentWithPropTypes = {
    key: 'reactClassPureComponentWithPropTypes',
    prefix: 'rpcp',
    body: [
        "import PropTypes from 'prop-types'",
        ...sharedSnippets_1.reactPureComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends PureComponent {`,
        '  static propTypes = {}',
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        '',
    ],
    description: 'Creates a React component class with ES7 module system',
};
const reactFunctionMemoComponent = {
    key: 'reactFunctionMemoComponent',
    prefix: 'rmc',
    body: [
        ...sharedSnippets_1.reactWithMemo,
        '',
        `const ${types_1.Placeholders.FileName} = memo(() => {`,
        ...sharedSnippets_1.innerComponent,
        '})',
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Memo Function Component with ES7 module system',
};
const reactFunctionMemoComponentWithPropTypes = {
    key: 'reactFunctionMemoComponentWithPropTypes',
    prefix: 'rmcp',
    body: [
        "import PropTypes from 'prop-types'",
        ...sharedSnippets_1.reactWithMemo,
        '',
        `const ${types_1.Placeholders.FileName} = memo((props) => {`,
        ...sharedSnippets_1.innerComponent,
        '})',
        '',
        `${types_1.Placeholders.FileName}.propTypes = {}`,
        ...sharedSnippets_1.exportDefault,
    ],
    description: 'Creates a React Memo Function Component with ES7 module system with PropTypes',
};
const reactClassComponentPropTypes = {
    key: 'reactClassComponentPropTypes',
    prefix: 'rccp',
    body: [
        "import PropTypes from 'prop-types'",
        ...sharedSnippets_1.reactComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends Component {`,
        `  static propTypes = {${types_1.Placeholders.SecondTab}: ${types_1.Placeholders.ThirdTab}}`,
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        '',
    ],
    description: 'Creates a React component class with PropTypes and ES7 module system',
};
const reactClassComponentRedux = {
    key: 'reactClassComponentRedux',
    prefix: 'rcredux',
    body: [
        ...sharedSnippets_1.reactComponentWithReduxConnect,
        '',
        `export class ${types_1.Placeholders.FileName} extends Component {`,
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.reduxComponentExport,
    ],
    description: 'Creates a React component class with connected redux and ES7 module system',
};
const reactClassComponentReduxPropTypes = {
    key: 'reactClassComponentReduxPropTypes',
    prefix: 'rcreduxp',
    body: [
        "import PropTypes from 'prop-types'",
        ...sharedSnippets_1.reactComponentWithReduxConnect,
        '',
        `export class ${types_1.Placeholders.FileName} extends Component {`,
        '  static propTypes = {',
        `    ${types_1.Placeholders.SecondTab}: ${types_1.Placeholders.ThirdTab}`,
        '  }',
        '',
        ...sharedSnippets_1.innerComponentReturn,
        '}',
        ...sharedSnippets_1.reduxComponentExport,
    ],
    description: 'Creates a React component class with PropTypes with connected redux and ES7 module system',
};
const reactFunctionalComponentRedux = {
    key: 'reactFunctionalComponentRedux',
    prefix: 'rfcredux',
    body: [
        ...sharedSnippets_1.reactWithReduxConnect,
        '',
        `export const ${types_1.Placeholders.FileName} = (props) => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        ...sharedSnippets_1.reduxComponentExport,
    ],
    description: 'Creates a React functional component with connected redux and ES7 module system',
};
const reactFunctionalComponentReduxPropTypes = {
    key: 'reactFunctionalComponentReduxPropTypes',
    prefix: 'rfcreduxp',
    body: [
        "import PropTypes from 'prop-types'",
        ...sharedSnippets_1.reactWithReduxConnect,
        '',
        `export const ${types_1.Placeholders.FileName} = (props) => {`,
        ...sharedSnippets_1.innerComponent,
        '}',
        '',
        `${types_1.Placeholders.FileName}.propTypes = {`,
        `  ${types_1.Placeholders.SecondTab}: PropTypes.${types_1.Placeholders.ThirdTab}`,
        '}',
        ...sharedSnippets_1.reduxComponentExport,
    ],
    description: 'DEPRECATED: Creates a React functional component with PropTypes with connected redux and ES7 module system',
};
exports.default = [
    reactArrowFunctionComponent,
    reactArrowFunctionComponentWithPropTypes,
    reactArrowFunctionExportComponent,
    reactClassComponent,
    reactClassComponentPropTypes,
    reactClassComponentRedux,
    reactClassComponentReduxPropTypes,
    reactClassExportComponent,
    reactClassExportComponentWithPropTypes,
    reactClassExportPureComponent,
    reactClassPureComponent,
    reactClassPureComponentWithPropTypes,
    reactFunctionMemoComponent,
    reactFunctionMemoComponentWithPropTypes,
    reactFunctionalComponent,
    reactFunctionalComponentRedux,
    reactFunctionalComponentReduxPropTypes,
    reactFunctionalComponentWithPropTypes,
    reactFunctionalExportComponent,
];
//# sourceMappingURL=components.js.map