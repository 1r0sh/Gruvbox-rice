"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertSnippetPlaceholders = exports.replaceSnippetPlaceholders = void 0;
const types_1 = require("../types");
const extensionConfig_1 = __importDefault(require("./extensionConfig"));
const replaceSnippetPlaceholders = (snippetString) => {
    const { typescriptPropsStatePrefix } = (0, extensionConfig_1.default)();
    const propsPlaceholder = typescriptPropsStatePrefix === 'type'
        ? types_1.Mappings.TypeProps
        : types_1.Mappings.InterfaceProps;
    const statePlaceholder = typescriptPropsStatePrefix === 'type'
        ? types_1.Mappings.TypeState
        : types_1.Mappings.InterfaceState;
    return String(snippetString)
        .replace(new RegExp(types_1.Placeholders.FileName, 'g'), '${1:${TM_FILENAME_BASE}}')
        .replace(new RegExp(types_1.Placeholders.FirstTab, 'g'), '${1:first}')
        .replace(new RegExp(types_1.Placeholders.SecondTab, 'g'), '${2:second}')
        .replace(new RegExp(types_1.Placeholders.ThirdTab, 'g'), '${3:third}')
        .replace(new RegExp(types_1.Placeholders.Capitalize, 'g'), '${1/(.*)/${1:/capitalize}/}')
        .replace(new RegExp(types_1.Placeholders.TypeProps, 'g'), propsPlaceholder)
        .replace(new RegExp(types_1.Placeholders.TypeState, 'g'), statePlaceholder);
};
exports.replaceSnippetPlaceholders = replaceSnippetPlaceholders;
const revertSnippetPlaceholders = (snippetString) => {
    return String(snippetString)
        .replace(new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'), types_1.Placeholders.FileName)
        .replace(new RegExp(/\${1:first}/, 'g'), types_1.Placeholders.FirstTab)
        .replace(new RegExp(/\${2:second}/, 'g'), types_1.Placeholders.SecondTab)
        .replace(new RegExp(/\${3:third}/, 'g'), types_1.Placeholders.ThirdTab)
        .replace(new RegExp(/\${1\/(.*)\/${1:\/capitalize}\/}/, 'g'), types_1.Placeholders.Capitalize);
};
exports.revertSnippetPlaceholders = revertSnippetPlaceholders;
exports.default = exports.revertSnippetPlaceholders;
//# sourceMappingURL=snippetPlaceholders.js.map