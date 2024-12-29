"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsStateInterface = exports.stateTypeInterface = exports.propsTypeInterface = exports.exportDefault = exports.innerComponentReturn = exports.innerComponent = exports.reduxComponentExport = exports.reactWithMemo = exports.reactComponentWithReduxConnect = exports.reactWithReduxConnect = exports.reactPropTypes = exports.reactPureComponent = exports.react = exports.reactComponent = void 0;
const types_1 = require("../types");
exports.reactComponent = ["import React, { Component } from 'react'"];
exports.react = ["import React from 'react'"];
exports.reactPureComponent = [
    "import React, { PureComponent } from 'react'",
];
exports.reactPropTypes = [
    "import React from 'react'",
    "import PropTypes from 'prop-types'",
];
exports.reactWithReduxConnect = [
    "import React from 'react'",
    "import { connect } from 'react-redux'",
];
exports.reactComponentWithReduxConnect = [
    "import React, { Component } from 'react'",
    "import { connect } from 'react-redux'",
];
exports.reactWithMemo = ["import React, { memo } from 'react'"];
exports.reduxComponentExport = [
    '',
    'const mapStateToProps = (state) => ({})',
    '',
    'const mapDispatchToProps = {}',
    '',
    `export default connect(mapStateToProps, mapDispatchToProps)(${types_1.Placeholders.FileName})`,
];
exports.innerComponent = [
    '  return (',
    `    <div>${types_1.Placeholders.FirstTab}</div>`,
    '  )',
];
exports.innerComponentReturn = [
    '  render() {',
    '    return (',
    `      <div>${types_1.Placeholders.FirstTab}</div>`,
    '    )',
    '  }',
];
exports.exportDefault = ['', `export default ${types_1.Placeholders.FileName}`];
exports.propsTypeInterface = [types_1.Placeholders.TypeProps, ''];
exports.stateTypeInterface = [types_1.Placeholders.TypeState, ''];
exports.propsStateInterface = [
    ...exports.propsTypeInterface,
    ...exports.stateTypeInterface,
];
//# sourceMappingURL=sharedSnippets.js.map