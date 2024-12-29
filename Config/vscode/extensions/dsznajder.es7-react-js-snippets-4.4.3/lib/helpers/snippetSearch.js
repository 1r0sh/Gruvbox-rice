"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const vscode_1 = require("vscode");
const formatters_1 = require("./formatters");
const snippetSearch = async () => {
    const { showQuickPick, activeTextEditor } = vscode_1.window;
    const snippets = (0, fs_1.readFileSync)(__dirname + '/../snippets/generated.json', 'utf8');
    const snippetsArray = Object.entries(JSON.parse(snippets));
    const items = snippetsArray.map(([shortDescription, { body, description, prefix: label }]) => ({
        body,
        description: description || shortDescription,
        label,
    }));
    const rawSnippet = await showQuickPick(items, {
        matchOnDescription: true,
        matchOnDetail: true,
        placeHolder: 'Search snippet by prefix or description',
    });
    const body = rawSnippet ? (0, formatters_1.parseSnippet)(rawSnippet.body) : '';
    if (activeTextEditor) {
        activeTextEditor.insertSnippet(new vscode_1.SnippetString(body));
    }
};
exports.default = snippetSearch;
//# sourceMappingURL=snippetSearch.js.map