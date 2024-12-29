"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const useEffect = {
    key: 'useEffect',
    prefix: 'useEffectSnippet',
    body: [
        'useEffect(() => {',
        `  ${types_1.Placeholders.FirstTab}`,
        '',
        '  return () => {',
        `    ${types_1.Placeholders.SecondTab}`,
        '  }',
        `}, [${types_1.Placeholders.ThirdTab}])`,
        '',
    ],
};
const useContext = {
    key: 'useContext',
    prefix: 'useContextSnippet',
    body: [
        `const ${types_1.Placeholders.FirstTab} = useContext(${types_1.Placeholders.SecondTab})`,
    ],
};
const useState = {
    key: 'useState',
    prefix: 'useStateSnippet',
    body: [
        `const [${types_1.Placeholders.FirstTab}, set${types_1.Placeholders.Capitalize}] = useState(${types_1.Placeholders.SecondTab})`,
    ],
};
const useReducer = {
    key: 'useReducer',
    prefix: 'useReducerSnippet',
    body: [
        `const [state, dispatch] = useReducer(${types_1.Placeholders.FirstTab}, ${types_1.Placeholders.SecondTab}, ${types_1.Placeholders.ThirdTab})`,
    ],
};
const useCallback = {
    key: 'useCallback',
    prefix: 'useCallbackSnippet',
    body: [
        'useCallback(',
        '  () => {',
        `    ${types_1.Placeholders.FirstTab}`,
        '  },',
        `  [${types_1.Placeholders.SecondTab}],`,
        ')',
        '',
    ],
};
const useMemo = {
    key: 'useMemo',
    prefix: 'useMemoSnippet',
    body: [
        `useMemo(() => ${types_1.Placeholders.FirstTab}, [${types_1.Placeholders.SecondTab}])`,
    ],
};
const useRef = {
    key: 'useRef',
    prefix: 'useRefSnippet',
    body: [`const ${types_1.Placeholders.FirstTab} = useRef(${types_1.Placeholders.SecondTab})`],
};
const useImperativeHandle = {
    key: 'useImperativeHandle',
    prefix: 'useImperativeHandleSnippet',
    body: [
        'useImperativeHandle(',
        `  ${types_1.Placeholders.FirstTab},`,
        '  () => {',
        `    ${types_1.Placeholders.SecondTab}`,
        '  },',
        `  [${types_1.Placeholders.ThirdTab}],`,
        ')',
    ],
};
const useLayoutEffect = {
    key: 'useLayoutEffect',
    prefix: 'useLayoutEffectSnippet',
    body: [
        'useLayoutEffect(() => {',
        `  ${types_1.Placeholders.FirstTab}`,
        '',
        '  return () => {',
        `    ${types_1.Placeholders.SecondTab}`,
        '  };',
        `}, [${types_1.Placeholders.ThirdTab}])`,
    ],
};
exports.default = [
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
];
//# sourceMappingURL=hooks.js.map