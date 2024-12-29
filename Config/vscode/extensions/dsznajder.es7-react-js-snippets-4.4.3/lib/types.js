"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mappings = exports.Placeholders = void 0;
exports.Placeholders = {
    FileName: 'file',
    FirstTab: 'first',
    SecondTab: 'second',
    ThirdTab: 'third',
    Capitalize: 'capitalize',
    TypeProps: 'typeProps',
    TypeState: 'typeState',
};
exports.Mappings = {
    FileName: '${1:${TM_FILENAME_BASE}}',
    FirstTab: '${1:first}',
    SecondTab: '${2:second}',
    ThirdTab: '${3:third}',
    Capitalize: '${1/(.*)/${1:/capitalize}/}',
    TypeProps: 'type Props = {}',
    TypeState: 'type State = {}',
    InterfaceProps: 'interface Props {}',
    InterfaceState: 'interface State {}',
};
//# sourceMappingURL=types.js.map