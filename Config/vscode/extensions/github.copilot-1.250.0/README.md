# GitHub Copilot - Your AI pair programmer

**[GitHub Copilot](https://code.visualstudio.com/docs/copilot/overview)** is an AI pair programmer tool that helps you write code faster and smarter.

**[Sign up for a GitHub Copilot free trial](https://github.com/settings/copilot?utm_source=vscode-completions-readme&utm_medium=first&utm_campaign=2024q3-em-MSFT-signup)**

![Using the GitHub Copilot Chat view to learn about a workspace and then inline completions and chat to make changes](https://github.com/microsoft/vscode-copilot-release/blob/main/images/readme-gif.gif?raw=true)

When you install Copilot in Visual Studio Code, you get two extensions:
* **[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)** (this extension) - Provides inline coding suggestions as you type.
* **[GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)** - A companion extension that provides conversational AI assistance.

## Getting access to GitHub Copilot

Sign up for a [30-day free trial with GitHub Copilot](https://github.com/settings/copilot?utm_source=vscode-completions-readme&utm_medium=second&utm_campaign=2024q3-em-MSFT-signup) today or request Copilot access from your enterprise admin. To access GitHub Copilot, an active GitHub Copilot subscription is required. You can read more about our business and individual offerings at [github.com/features/copilot](https://github.com/features/copilot?utm_source=vscode-completions&utm_medium=readme&utm_campaign=2024q3-em-MSFT-signup).

## What can I do with GitHub Copilot?

You can use Copilot in Visual Studio Code to generate code, fix errors, ask questions about your code, and much more...

### Code completions

GitHub Copilot provides autocomplete-style suggestions from an AI pair programmer as you code. Just start writing your code in the editor and Copilot provides you with relevant suggestions. Need something specific? Add a natural language code comment to give directions to Copilot about what you want.

![Example of Copilot code completions in test.js](https://code.visualstudio.com/assets/docs/copilot/inline-suggestions/js-suggest.png)

### Chat

Sometimes you just want to ask a question. Whether you're troubleshooting a bug or crafting a new feature, GitHub Copilot is here to assist when you encounter challenges – simply ask for guidance via chat.

**[Chat view](https://code.visualstudio.com/docs/editor/github-copilot#_chat-view)**:

Ask Copilot for help with any task or question in the Chat view, bringing in code from your current files. Copilot is not just a search engine. Rather than giving you a generic answer, it can give answers that are relevant for your codebase.

![Chat view in VS Code](https://code.visualstudio.com/assets/docs/copilot/copilot-chat/copilot-view.png)

**[Inline Chat](https://code.visualstudio.com/docs/editor/github-copilot#_inline-chat)**:

Apply Copilot's AI suggestions directly to your code, staying in the flow. Need help with refactoring a method, adding error handling, or explaining a complex algorithm? Just launch Copilot in the editor!

![Inline chat in VS Code](https://code.visualstudio.com/assets/docs/copilot/copilot-chat/inline-chat-question-example.png)

**[Quick Chat](https://code.visualstudio.com/docs/editor/github-copilot#_quick-chat)**:

Do you just want to ask a quick question and immediately get back in the action? Open Quick Chat with the **Chat: Open Quick Chat** command , or use the `Ctrl+Shift+I` or `Cmd+Shift+I` keyboard shortcut.

![Quick Chat in VS Code](https://code.visualstudio.com/assets/docs/copilot/copilot-chat/quick-chat-dropdown.png)

### Participants

Participants are experts in a particular domain, such as coding, the editor, or many other areas. You can tag them in any chat to scope your questions and get better answers.

Below are examples of using participants built into VS Code.

**@workspace**
![Using the workspace chat participant](https://github.com/microsoft/vscode-copilot-release/blob/main/images/participants-workspace.gif?raw=true)

**@terminal**
![Using the terminal chat participant](https://github.com/microsoft/vscode-copilot-release/blob/main/images/participants-vscode.gif?raw=true)

**@vscode**
![Using the VS Code chat participant](https://github.com/microsoft/vscode-copilot-release/blob/main/images/participants-terminal.gif?raw=true)

### Slash commands

Chat participants can also contribute what we call slash commands, which are shortcuts to specific functionality. Slash commands give you access to meticulously crafted prompts for common coding workflows, no prompt engineering required.

Below are examples of using several slash commands.

**/fix**
![Using /fix in VS Code](https://github.com/microsoft/vscode-copilot-release/blob/main/images/slash-fix.gif?raw=true)

**/doc**
![Using /doc in VS Code](https://github.com/microsoft/vscode-copilot-release/blob/main/images/slash-doc.png?raw=true)

**/tests**
![Using /tests in VS Code](https://github.com/microsoft/vscode-copilot-release/blob/main/images/slash-tests.gif?raw=true)

### Variables

Variables enable you to reference specific information in your code, the editor, or information from other extensions. Combine these with participants to easily pass all the necessary context to Copilot.

**#file**
![Using the file variable in VS Code](https://github.com/microsoft/vscode-copilot-release/blob/main/images/variables-file.gif?raw=true)

**#terminalLastCommand**
![Using the terminal last command variable in VS Code](https://github.com/microsoft/vscode-copilot-release/blob/main/images/variables-terminalLastCommand.gif?raw=true)

### Supported languages and frameworks

GitHub Copilot works on any language, including Java, PHP, Python, JavaScript, Ruby, Go, C#, or C++. Because it’s been trained on languages in public repositories, it works for most popular languages, libraries and frameworks.

### Version compatibility

As Copilot Chat releases in lockstep with VS Code due to its deep UI integration, every new version of Copilot Chat is only compatible with the latest and newest release of VS Code. This means that if you are using an older version of VS Code, you will not be able to use the latest Copilot Chat.

Only the latest Copilot Chat versions will use the latest models provided by the Copilot service, as even minor model upgrades require prompt changes and fixes in the extension. An older version of Copilot Chat will still use the latest version of Copilot completions.

### Privacy and preview terms

By using Copilot Chat you agree to [GitHub Copilot chat preview terms](https://docs.github.com/en/early-access/copilot/github-copilot-chat-technical-preview-license-terms). Review the [transparency note](https://aka.ms/CopilotChatTransparencyNote) to understand about usage, limitations and ways to improve Copilot Chat during the technical preview.

Your code is yours. We follow responsible practices in accordance with our [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement) to ensure that your code snippets will not be used as suggested code for other users of GitHub Copilot.

To get the latest security fixes, please use the latest version of the Copilot extension and VS Code.

### Resources & next steps
* **[Sign up for your free GitHub Copilot trial](https://github.com/settings/copilot?utm_source=vscode-completions-readme&utm_medium=third&utm_campaign=2024q3-em-MSFT-signup)**
    * If you're using Copilot for your business, check out [Copilot Business](https://docs.github.com/en/copilot/copilot-business/about-github-copilot-business) and [Copilot Enterprise](https://docs.github.com/en/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)
* **[Get started with Copilot in VS Code tutorial](https://code.visualstudio.com/docs/copilot/getting-started)**
* **[Copilot Chat quickstart video](https://www.youtube.com/watch?v=3surPGP7_4o)** to learn Copilot Chat in less than 4 minutes
* **[VS Code Copilot Series on YouTube](https://www.youtube.com/playlist?list=PLj6YeMhvp2S5_hvBl2SE-7YCHYlLQ0bPt)**
* **[FAQ](https://code.visualstudio.com/docs/copilot/faq)**
* **Feedback**: We'd love to get your help in making GitHub Copilot better!
    * [Feedback on Copilot completions](https://github.com/orgs/community/discussions/categories/copilot)
    * [Feedback on Copilot Chat](https://github.com/microsoft/vscode-copilot-release/issues)
