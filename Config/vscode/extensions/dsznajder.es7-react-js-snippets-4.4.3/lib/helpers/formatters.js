"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSnippet = exports.formatSnippet = void 0;
const prettier_1 = __importDefault(require("prettier"));
const extensionConfig_1 = __importDefault(require("./extensionConfig"));
const getPrettierConfig_1 = __importDefault(require("./getPrettierConfig"));
const snippetPlaceholders_1 = require("./snippetPlaceholders");
const formatSnippet = (snippetString) => {
    return (0, extensionConfig_1.default)().prettierEnabled
        ? prettier_1.default.format(snippetString, (0, getPrettierConfig_1.default)())
        : snippetString;
};
exports.formatSnippet = formatSnippet;
const parseSnippet = (body) => {
    const snippetBody = typeof body === 'string' ? body : body.join('\n');
    return (0, snippetPlaceholders_1.replaceSnippetPlaceholders)((0, exports.formatSnippet)((0, snippetPlaceholders_1.revertSnippetPlaceholders)(snippetBody)));
};
exports.parseSnippet = parseSnippet;
//# sourceMappingURL=formatters.js.map