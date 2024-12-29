"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const describeBlock = {
    key: 'describeBlock',
    prefix: 'desc',
    body: [
        `describe('${types_1.Placeholders.FirstTab}', () => { ${types_1.Placeholders.SecondTab} })`,
    ],
    description: 'Testing `describe` block',
};
const testBlock = {
    key: 'testBlock',
    prefix: 'test',
    body: [
        `test('should ${types_1.Placeholders.FirstTab}', () => { ${types_1.Placeholders.SecondTab} })`,
    ],
    description: 'Testing `test` block',
};
const testAsyncBlock = {
    key: 'testAsyncBlock',
    prefix: 'testa',
    body: [
        `test('should ${types_1.Placeholders.FirstTab}', async () => { ${types_1.Placeholders.SecondTab} })`,
    ],
    description: 'Testing `asynchronous test` block',
};
const itBlock = {
    key: 'itBlock',
    prefix: 'tit',
    body: [
        `it('should ${types_1.Placeholders.FirstTab}', () => { ${types_1.Placeholders.SecondTab} })`,
    ],
    description: 'Testing `it` block',
};
const itAsyncBlock = {
    key: 'itAsyncBlock',
    prefix: 'tita',
    body: [
        `it('should ${types_1.Placeholders.FirstTab}', async () => { ${types_1.Placeholders.SecondTab} })`,
    ],
    description: 'Testing asynchronous `it` block',
};
const setupReactTest = {
    key: 'setupReactTest',
    prefix: 'stest',
    body: [
        "import React from 'react'",
        "import renderer from 'react-test-renderer'",
        '',
        `import { ${types_1.Placeholders.FileName} } from '../${types_1.Placeholders.FileName}'`,
        '',
        `describe('<${types_1.Placeholders.FileName} />', () => {`,
        '  const defaultProps = {}',
        `  const wrapper = renderer.create(<${types_1.Placeholders.FileName} {...defaultProps} />)`,
        '',
        "  test('render', () => {",
        '    expect(wrapper).toMatchSnapshot()',
        '  })',
        '})',
    ],
};
const setupReactNativeTest = {
    key: 'setupReactNativeTest',
    prefix: 'sntest',
    body: [
        "import 'react-native'",
        "import React from 'react'",
        "import renderer from 'react-test-renderer'",
        '',
        `import ${types_1.Placeholders.FileName} from '../${types_1.Placeholders.FileName}'`,
        '',
        `describe('<${types_1.Placeholders.FileName} />', () => {`,
        '  const defaultProps = {}',
        `  const wrapper = renderer.create(<${types_1.Placeholders.FileName} {...defaultProps} />)`,
        '',
        "  test('render', () => {",
        '    expect(wrapper).toMatchSnapshot()',
        '  })',
        '})',
    ],
};
const setupReactComponentTestWithRedux = {
    key: 'setupReactComponentTestWithRedux',
    prefix: 'srtest',
    body: [
        "import React from 'react'",
        "import renderer from 'react-test-renderer'",
        "import { Provider } from 'react-redux'",
        '',
        "import store from '~/store'",
        `import { ${types_1.Placeholders.FileName} } from '../${types_1.Placeholders.FileName}'`,
        '',
        `describe('<${types_1.Placeholders.FileName} />', () => {`,
        '  const defaultProps = {}',
        '  const wrapper = renderer.create(',
        '    <Provider store={store}>',
        `     <${types_1.Placeholders.FileName} {...defaultProps} />`,
        '    </Provider>,',
        '  )',
        '',
        "  test('render', () => {",
        '    expect(wrapper).toMatchSnapshot()',
        '  })',
        '})',
    ],
    description: 'Create test component',
};
const setupReactNativeTestWithRedux = {
    key: 'setupReactNativeTestWithRedux',
    prefix: 'snrtest',
    body: [
        "import 'react-native'",
        "import React from 'react'",
        "import renderer from 'react-test-renderer'",
        "import { Provider } from 'react-redux'",
        '',
        "import store from '~/store'",
        `import ${types_1.Placeholders.FileName} from '../${types_1.Placeholders.FileName}'`,
        '',
        `describe('<${types_1.Placeholders.FileName} />', () => {`,
        '  const defaultProps = {}',
        '  const wrapper = renderer.create(',
        '    <Provider store={store}>',
        `      <${types_1.Placeholders.FileName} {...defaultProps} />`,
        '    </Provider>,',
        '  )',
        '',
        "  test('render', () => {",
        '    expect(wrapper).toMatchSnapshot()',
        '  })',
        '})',
    ],
};
exports.default = [
    describeBlock,
    itAsyncBlock,
    itBlock,
    setupReactComponentTestWithRedux,
    setupReactNativeTest,
    setupReactNativeTestWithRedux,
    setupReactTest,
    testAsyncBlock,
    testBlock,
];
//# sourceMappingURL=tests.js.map