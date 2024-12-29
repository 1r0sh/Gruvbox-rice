"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const sharedSnippets_1 = require("./sharedSnippets");
const reactNativeStylesSnippet = ['const styles = StyleSheet.create({})'];
const reactNativeComponentReturn = [
    '  render() {',
    '    return (',
    '      <View>',
    `        <Text>${types_1.Placeholders.FirstTab}</Text>`,
    '      </View>',
    '    )',
    '  }',
];
const reactNativeReturn = [
    '  return (',
    '    <View>',
    `      <Text>${types_1.Placeholders.FirstTab}</Text>`,
    '    </View>',
    '  )',
];
const reactNativeImport = {
    key: 'reactNativeImport',
    prefix: 'imrn',
    body: [`import { ${types_1.Placeholders.FirstTab} } from 'react-native'`],
};
const reactNativeStyles = {
    key: 'reactNativeStyles',
    prefix: 'rnstyle',
    body: [`const styles = StyleSheet.create({${types_1.Placeholders.FirstTab}})`],
};
const reactNativeComponent = {
    key: 'reactNativeComponent',
    prefix: 'rnc',
    body: [
        "import { Text, View } from 'react-native'",
        ...sharedSnippets_1.reactComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends Component {`,
        ...reactNativeComponentReturn,
        '}',
    ],
};
const reactNativeComponentWithStyles = {
    key: 'reactNativeComponentWithStyles',
    prefix: 'rncs',
    body: [
        "import { Text, StyleSheet, View } from 'react-native'",
        ...sharedSnippets_1.reactComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends Component {`,
        ...reactNativeComponentReturn,
        '}',
        '',
        ...reactNativeStylesSnippet,
    ],
};
const reactNativeComponentExport = {
    key: 'reactNativeComponentExport',
    prefix: 'rnce',
    body: [
        "import { Text, View } from 'react-native'",
        ...sharedSnippets_1.reactComponent,
        '',
        `export class ${types_1.Placeholders.FileName} extends Component {`,
        ...reactNativeComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
};
const reactNativePureComponent = {
    key: 'reactNativePureComponent',
    prefix: 'rnpc',
    body: [
        "import { Text, View } from 'react-native'",
        ...sharedSnippets_1.reactPureComponent,
        '',
        `export default class ${types_1.Placeholders.FileName} extends PureComponent {`,
        ...reactNativeComponentReturn,
        '}',
    ],
};
const reactNativePureComponentExport = {
    key: 'reactNativePureComponentExport',
    prefix: 'rnpce',
    body: [
        "import { Text, View } from 'react-native'",
        ...sharedSnippets_1.reactPureComponent,
        '',
        `export class ${types_1.Placeholders.FileName} extends PureComponent {`,
        ...reactNativeComponentReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
};
const reactNativeFunctionalExportComponent = {
    key: 'reactNativeFunctionalExportComponent',
    prefix: 'rnfe',
    body: [
        "import { View, Text } from 'react-native'",
        ...sharedSnippets_1.react,
        '',
        `const ${types_1.Placeholders.FileName} = () => {`,
        ...reactNativeReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
    ],
};
const reactNativeFunctionalExportComponentWithStyles = {
    key: 'reactNativeFunctionalExportComponentWithStyles',
    prefix: 'rnfes',
    body: [
        "import { StyleSheet, Text, View } from 'react-native'",
        ...sharedSnippets_1.react,
        '',
        `const ${types_1.Placeholders.FileName} = () => {`,
        ...reactNativeReturn,
        '}',
        ...sharedSnippets_1.exportDefault,
        '',
        ...reactNativeStylesSnippet,
    ],
};
const reactNativeFunctionalComponent = {
    key: 'reactNativeFunctionalComponent',
    prefix: 'rnf',
    body: [
        "import { View, Text } from 'react-native'",
        ...sharedSnippets_1.react,
        '',
        `export default function ${types_1.Placeholders.FileName}() {`,
        ...reactNativeReturn,
        '}',
    ],
};
const reactNativeFunctionalComponentWithStyles = {
    key: 'reactNativeFunctionalComponentWithStyles',
    prefix: 'rnfs',
    body: [
        "import { StyleSheet, Text, View } from 'react-native'",
        ...sharedSnippets_1.react,
        '',
        `export default function ${types_1.Placeholders.FileName}() {`,
        ...reactNativeReturn,
        '}',
        '',
        ...reactNativeStylesSnippet,
    ],
};
exports.default = [
    reactNativeComponent,
    reactNativeComponentExport,
    reactNativeComponentWithStyles,
    reactNativeFunctionalComponent,
    reactNativeFunctionalComponentWithStyles,
    reactNativeFunctionalExportComponent,
    reactNativeFunctionalExportComponentWithStyles,
    reactNativeImport,
    reactNativePureComponent,
    reactNativePureComponentExport,
    reactNativeStyles,
];
//# sourceMappingURL=reactNative.js.map