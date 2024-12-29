"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const sharedSnippets_1 = require("./sharedSnippets");
/**
 * react, react-dom & prop-types
 */
const importReact = {
    key: 'importReact',
    prefix: 'imr',
    body: ["import React from 'react'"],
};
const importReactDom = {
    key: 'importReactDom',
    prefix: 'imrd',
    body: ["import ReactDOM from 'react-dom'"],
};
const importReactWithComponent = {
    key: 'importReactWithComponent',
    prefix: 'imrc',
    body: ["import React, { Component } from 'react'"],
};
const importReactWithComponentAndPropTypes = {
    key: 'importReactWithComponentAndPropTypes',
    prefix: 'imrcp',
    body: [
        "import React, { Component } from 'react'",
        "import PropTypes from 'prop-types'",
        '',
    ],
};
const importReactWithPureComponent = {
    key: 'importReactWithPureComponent',
    prefix: 'imrpc',
    body: ["import React, { PureComponent } from 'react'"],
};
const importReactWithPureComponentAndPropTypes = {
    key: 'importReactWithPureComponentAndPropTypes',
    prefix: 'imrpcp',
    body: [
        "import React, { PureComponent } from 'react'",
        "import PropTypes from 'prop-types'",
        '',
    ],
};
const importReactWithMemo = {
    key: 'importReactWithMemo',
    prefix: 'imrm',
    body: sharedSnippets_1.reactWithMemo,
};
const importReactWithMemoAndPropTypes = {
    key: 'importReactWithMemoAndPropTypes',
    prefix: 'imrmp',
    body: [...sharedSnippets_1.reactWithMemo, "import PropTypes from 'prop-types'", ''],
};
const importPropTypes = {
    key: 'importPropTypes',
    prefix: 'impt',
    body: ["import PropTypes from 'prop-types'"],
};
/**
 * react-router
 */
const importBrowserRouter = {
    key: 'importBrowserRouter',
    prefix: 'imbr',
    body: ["import { BrowserRouter as Router } from 'react-router-dom'"],
};
const importBrowserRouterWithRouteAndNavLink = {
    key: 'importBrowserRouterWithRouteAndNavLink',
    prefix: 'imrr',
    body: [
        "import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'",
        '',
    ],
};
const importRouterSetup = {
    key: 'importRouterSetup',
    prefix: 'imbrc',
    body: ["import { Route, Switch, NavLink, Link } from 'react-router-dom'"],
};
const importRouterSwitch = {
    key: 'importRouterSwitch',
    prefix: 'imbrs',
    body: ["import { Switch } from 'react-router-dom'"],
};
const importRouterLink = {
    key: 'importRouterLink',
    prefix: 'imbrl',
    body: ["import { Link } from 'react-router-dom'"],
};
const importRouterNavLink = {
    key: 'importRouterNavLink',
    prefix: 'imbrnl',
    body: ["import { NavLink } from 'react-router-dom'"],
};
/**
 * Others
 */
const importSnippet = {
    key: 'import',
    prefix: 'imp',
    body: [`import ${types_1.Placeholders.SecondTab} from '${types_1.Placeholders.FirstTab}'`],
};
const importNoModuleName = {
    key: 'importNoModuleName',
    prefix: 'imn',
    body: [`import '${types_1.Placeholders.FirstTab}'`],
};
const importDestructing = {
    key: 'importDestructing',
    prefix: 'imd',
    body: [
        `import { ${types_1.Placeholders.SecondTab} } from '${types_1.Placeholders.FirstTab}'`,
    ],
};
const importEverything = {
    key: 'importEverything',
    prefix: 'ime',
    body: [
        `import * as ${types_1.Placeholders.SecondTab} from '${types_1.Placeholders.FirstTab}'`,
    ],
};
const importAs = {
    key: 'importAs',
    prefix: 'ima',
    body: [
        `import { ${types_1.Placeholders.SecondTab} as ${types_1.Placeholders.ThirdTab} } from '${types_1.Placeholders.FirstTab}'`,
    ],
};
exports.default = [
    importAs,
    importBrowserRouter,
    importBrowserRouterWithRouteAndNavLink,
    importDestructing,
    importEverything,
    importNoModuleName,
    importPropTypes,
    importReact,
    importReactDom,
    importReactWithComponent,
    importReactWithComponentAndPropTypes,
    importReactWithMemo,
    importReactWithMemoAndPropTypes,
    importReactWithPureComponent,
    importReactWithPureComponentAndPropTypes,
    importRouterLink,
    importRouterNavLink,
    importRouterSetup,
    importRouterSwitch,
    importSnippet,
];
//# sourceMappingURL=imports.js.map