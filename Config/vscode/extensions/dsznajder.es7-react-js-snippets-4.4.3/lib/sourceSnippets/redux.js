"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const importReduxConnect = {
    key: 'importReduxConnect',
    prefix: 'redux',
    body: ["import { connect } from 'react-redux'"],
};
const reduxAction = {
    key: 'reduxAction',
    prefix: 'rxaction',
    body: [
        `export const ${types_1.Placeholders.FirstTab} = (payload) => ({`,
        `  type: ${types_1.Placeholders.SecondTab},`,
        '  payload',
        '})',
        '',
    ],
};
const reduxConst = {
    key: 'reduxConst',
    prefix: 'rxconst',
    body: [`export const ${types_1.Placeholders.FirstTab} = '${types_1.Placeholders.FirstTab}'`],
};
const reduxReducer = {
    key: 'reduxReducer',
    prefix: 'rxreducer',
    body: [
        'const initialState = {}',
        '',
        'export default (state = initialState, { type, payload }) => {',
        '  switch (type) {',
        '',
        `  case ${types_1.Placeholders.FirstTab}:`,
        '    return { ...state, ...payload }',
        '',
        '  default:',
        '    return state',
        '  }',
        '}',
        '',
    ],
};
const reduxSelector = {
    key: 'reduxSelector',
    prefix: 'rxselect',
    body: [
        "import { createSelector } from 'reselect'",
        '',
        `export const ${types_1.Placeholders.FirstTab} = state => state.${types_1.Placeholders.SecondTab}`,
    ],
};
const reduxSlice = {
    key: 'reduxSlice',
    prefix: 'rxslice',
    body: [
        "import { createSlice } from '@reduxjs/toolkit'",
        '',
        'const initialState = {',
        '',
        '}',
        '',
        `const ${types_1.Placeholders.FileName} = createSlice({`,
        `  name: ${types_1.Placeholders.SecondTab},`,
        '  initialState,',
        '  reducers: {}',
        '});',
        '',
        `export const {} = ${types_1.Placeholders.FileName}.actions`,
        '',
        `export default ${types_1.Placeholders.FileName}.reducer`,
    ],
};
const mappingToProps = {
    key: 'mappingToProps',
    prefix: 'reduxmap',
    body: [
        'const mapStateToProps = (state) => ({})',
        '',
        'const mapDispatchToProps = {}',
    ],
};
exports.default = [
    importReduxConnect,
    reduxAction,
    reduxConst,
    reduxReducer,
    reduxSelector,
    reduxSlice,
    mappingToProps,
];
//# sourceMappingURL=redux.js.map