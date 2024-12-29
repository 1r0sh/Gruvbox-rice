"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prettier_1 = __importDefault(require("prettier"));
const extensionConfig_1 = __importDefault(require("./extensionConfig"));
let prettierConfig;
prettier_1.default
    .resolveConfig('', { editorconfig: true })
    .then((config) => (prettierConfig = config));
const getPrettierConfig = () => {
    const { prettierEnabled } = (0, extensionConfig_1.default)();
    return {
        parser: 'typescript',
        ...(prettierEnabled && prettierConfig),
    };
};
exports.default = getPrettierConfig;
//# sourceMappingURL=getPrettierConfig.js.map