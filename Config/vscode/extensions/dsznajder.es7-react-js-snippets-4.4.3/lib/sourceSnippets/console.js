"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const consoleAssert = {
    key: 'consoleAssert',
    prefix: 'cas',
    body: [`console.assert(${types_1.Placeholders.FirstTab}, ${types_1.Placeholders.SecondTab})`],
    description: 'If the specified expression is false, the message is written to the console along with a stack trace',
};
const consoleClear = {
    key: 'consoleClear',
    prefix: 'ccl',
    body: ['console.clear()'],
    description: 'Clears the console',
};
const consoleCount = {
    key: 'consoleCount',
    prefix: 'cco',
    body: [`console.count(${types_1.Placeholders.FirstTab})`],
    description: 'Writes the the number of times that count() has been invoked at the same line and with the same label',
};
const consoleDir = {
    key: 'consoleDir',
    prefix: 'cdi',
    body: [`console.dir(${types_1.Placeholders.FirstTab})`],
    description: 'Prints a JavaScript representation of the specified object',
};
const consoleError = {
    key: 'consoleError',
    prefix: 'cer',
    body: [`console.error(${types_1.Placeholders.FirstTab})`],
    description: 'Displays a message in the console and also includes a stack trace from where the method was called',
};
const consoleGroup = {
    key: 'consoleGroup',
    prefix: 'cgr',
    body: [`console.group('${types_1.Placeholders.FirstTab}')`],
    description: 'Groups and indents all following output by an additional level, until console.groupEnd() is called.',
};
const consoleGroupEnd = {
    key: 'consoleGroupEnd',
    prefix: 'cge',
    body: ['console.groupEnd()'],
    description: 'Closes out the corresponding console.group().',
};
const consoleLog = {
    key: 'consoleLog',
    prefix: 'clg',
    body: [`console.log(${types_1.Placeholders.FirstTab})`],
    description: 'Displays a message in the console',
};
const consoleTrace = {
    key: 'consoleTrace',
    prefix: 'ctr',
    body: [`console.trace(${types_1.Placeholders.FirstTab})`],
    description: 'Prints a stack trace from the point where the method was called',
};
const consoleLogObject = {
    key: 'consoleLogObject',
    prefix: 'clo',
    body: [`console.log('${types_1.Placeholders.FirstTab}', ${types_1.Placeholders.FirstTab})`],
    description: 'Logs property with name.',
};
const consoleLogJson = {
    key: 'consoleLogJson',
    prefix: 'clj',
    body: [
        `console.log('${types_1.Placeholders.FirstTab}', JSON.stringify(${types_1.Placeholders.FirstTab}, null, 2))`,
    ],
    description: 'Logs stringified JSON property with name.',
};
const consoleTime = {
    key: 'consoleTime',
    prefix: 'ctm',
    body: [`console.time('${types_1.Placeholders.FirstTab}')`],
    description: 'Console time wrapper',
};
const consoleTimeEnd = {
    key: 'consoleTimeEnd',
    prefix: 'cte',
    body: [`console.timeEnd('${types_1.Placeholders.FirstTab}')`],
    description: 'Console time end wrapper',
};
const consoleWarn = {
    key: 'consoleWarn',
    prefix: 'cwa',
    body: [`console.warn(${types_1.Placeholders.FirstTab})`],
    description: 'Displays a message in the console but also displays a yellow warning icon along with the logged message',
};
const consoleInfo = {
    key: 'consoleInfo',
    prefix: 'cin',
    body: [`console.info(${types_1.Placeholders.FirstTab})`],
    description: 'Displays a message in the console but also displays a blue information icon along with the logged message',
};
const consoleTable = {
    key: 'consoleTable',
    prefix: 'ctl',
    body: [`console.table([${types_1.Placeholders.FirstTab}])`],
    description: 'Logs table to console',
};
exports.default = [
    consoleAssert,
    consoleClear,
    consoleCount,
    consoleDir,
    consoleError,
    consoleGroup,
    consoleGroupEnd,
    consoleLog,
    consoleTrace,
    consoleLogObject,
    consoleLogJson,
    consoleTime,
    consoleTimeEnd,
    consoleWarn,
    consoleInfo,
    consoleTable,
];
//# sourceMappingURL=console.js.map