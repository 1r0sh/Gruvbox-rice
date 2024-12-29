## 0.22 (2024-10-29)

GitHub Copilot updates from [October 2024](https://code.visualstudio.com/updates/v1_95):

### Start a code editing session with Copilot Edits

**Setting**: `github.copilot.chat.edits.enabled`

With Copilot Edits, currently in preview, you can start an AI-powered code editing session where you can quickly iterate on code changes. Based on your prompts, Copilot Edits proposes code changes across multiple files in your workspace. These edits are applied directly in the editor, so you can quickly review them in-place, with the full context of the surrounding code.

Copilot Edits is great for when you are building something iteratively. It brings the best of Copilot Chat and Inline Chat together in one experience. Have an ongoing, multi-turn chat conversation on the side, while benefiting from inline code suggestions.

<video src="https://code.visualstudio.com/assets/updates/1_95/copilot-edits-hero.mp4" title="Use Copilot Edits to modify an Express app." autoplay loop controls muted></video>

Get started with Copilot Edits in just three steps:

1. Start an edit session by selecting **Open Copilot Edits** from the Chat menu, or press <kbd>Ctrl+Shift+I</kbd>.

    ![Screenshot showing the Copilot menu in the Command Center, highlighting the Open Edit Session item](https://code.visualstudio.com/assets/updates/1_95/copilot-command-center-open-edit-session.png)

1. Add relevant files to the _working set_ to indicate to Copilot which files you want to work on.

1. Enter a prompt to tell Copilot about the edit you want to make! For example, `Add a simple navigation bar to all pages` or `Use vitest instead of jest`.

Get more details about [Copilot Edits](https://code.visualstudio.com/docs/copilot/copilot-edits) in our documentation. Try it out now and provide your feedback through [our issues](https://github.com/microsoft/vscode-copilot-release/issues)!

### A new place for Chat: Secondary Side Bar

The new default location for the Chat view is the [Secondary Side Bar](https://aka.ms/vscode-secondary-sidebar). By using the Secondary Side Bar, you can have chat open at any time, while you still have other views available to you like the File Explorer or Source Control. This provides you with a more integrated AI experience in VS Code. You can quickly get to chat by using the <kbd>Ctrl+Shift+I</kbd> keyboard shortcut.

![Chat view in its new location after having moved](https://code.visualstudio.com/assets/updates/1_95/chat-new-location.png)

With the introduction of the new Chat menu next to the Command Center, bringing up the Secondary Side Bar with chat is just a click away:

<video src="https://code.visualstudio.com/assets/updates/1_95/chat-video.mp4" title="Chat in Secondary Side Bar." autoplay loop controls muted></video>

The chat menu gives you access to the most common tasks for Copilot Chat. If you wish to hide this menu, a new setting `chat.commandCenter.enabled` is provided.

![Chat Menu](https://code.visualstudio.com/assets/updates/1_95/chat-menu.png)

**Note:** If you had previously installed GitHub Copilot, a view will show up at the location you had Chat before that enables you to restore the Chat view to the old location, if that works better for you.

![Chat view in its old location after having moved](https://code.visualstudio.com/assets/updates/1_95/chat-old-location.png)

### Copilot code reviews

With GitHub Copilot code review in Visual Studio Code, you can now get fast, AI-powered feedback on your code as you write it, or request a review of all your changes before you push. GitHub Copilot code review in Visual Studio Code is currently in preview. Try it out and provide feedback through [our issues](https://github.com/microsoft/vscode-copilot-release/issues).

There are two ways to use Copilot code review in VS Code:

* **Review selection**: for an initial review, select code in the editor and either select **Copilot** > **Review and Comment** from the editor context menu, or use the **GitHub Copilot: Review and Comment** command from the Command Palette. _(This feature is in preview.)_

* **Review changes**: for a deeper review of all uncommitted changes, select the **Copilot Code Review** button in the **Source Control** view, which you can also do in your pull request on GitHub.com. _(Join the [waitlist](https://gh.io/copilot-code-review-waitlist), open to all Copilot subscribers)_

    ![Request review of uncommited changes](https://code.visualstudio.com/assets/updates/1_95/review_diff.png)

Copilot's feedback shows up as comments in the editor, attached to lines of your code. Where possible, the comments include actionable code suggestions, which you can apply in one action.

![Screenshot showing a comment reviewing a code selection](https://code.visualstudio.com/assets/updates/1_95/reviewing_selection.png)

To learn more about Copilot code review, head to the [GitHub code review documentation](https://gh.io/copilot-code-review-docs).

Copilot can provide review comments that match the specific practices of your team or project, provided you give the right context. When reviewing selections with custom review instructions, you can define those specific requirements via the `github.copilot.chat.reviewSelection.instructions` setting. Similar to [code-generation and test-generation instructions](https://code.visualstudio.com/docs/copilot/copilot-customization), you can either define the instructions directly in the setting, or you can store them in a separate file and reference it in the setting.

The following code snippet shows an example of review instructions:

```json
  "github.copilot.chat.reviewSelection.instructions": [
    {
      "text": "Logging should be done with the Log4j ."
    },
    {
      "text": "Always use the Polly library for fault-handling."
    },
    {
      "file": "code-style.md" // import instructions from file `code-style.md`
    }
  ],
```

An example of the contents of the `code-style.md` file:

```markdown
Private fields should start with an underscore.

A file can only contain one class declaration.
```

### Intent detection in Copilot Chat

**Setting**: `chat.experimental.detectParticipant.enabled`

GitHub Copilot has several built-in chat participants, such as `@workspace`, which also contribute commands to the Chat view. Previously, you had to explicitly specify the chat participant and command in a chat prompt. To make it easier to use chat participants with natural language, we've enabled Copilot Chat to automatically route your question to a suitable participant or chat command.

![Screenshot of Chat view that shows how the '@workspace' participant is automatically detected.](https://code.visualstudio.com/assets/updates/1_93/participant-detection.png)

If the automatically selected participant is not appropriate for your question, you can select the **rerun without** link at the top of the chat response to resend your question to Copilot.

### Control current editor context

Copilot Chat has always automatically included your current selection or the currently visible code as context with your chat request. Large Language Models (LLMs) are generally good at understanding whether a piece of context is relevant. But sometimes, when you ask a question that is not about your current editor, including this context might affect how the model interprets your question.

We now show a special attachment control in the chat input that gives a hint about the editor context and which enables you to toggle whether or not to include the editor context.

![The current editor context control in the chat input, which shows that the context is not included.](https://code.visualstudio.com/assets/updates/1_95/implicit-context.png)

There are no changes to the behavior of the editor context. When the active editor has a selection, then just the selection is included. Otherwise, just the code that is scrolled into view is included. You can still attach other files or the full file by using the paperclip button or by typing `#` in the chat prompt.

### Interactive workspace symbol links

A common use case of Copilot Chat is asking questions about the code in your workspace, such as using `/tests` to generate new unit tests for the selected code or asking `@workspace` to find some specific class or function in your project. This milestone, we added enhanced links for any workspace symbols that Copilot mentions in chat responses. These symbol links can help you better understand Copilot responses and learn more about the symbols used in them.

Symbol links are rendered as little pills in the response, just like the [file links](https://code.visualstudio.com/updates/v1_94#_improved-file-links-in-chat-responses) we added last milestone. To start learn more about a symbol, just seleect the symbol link to jump to that symbol's definition:

<video src="https://code.visualstudio.com/assets/updates/1_95/copilot-symbol-links-overview.mp4" title="Symbols links being rendered in a Copilot response. Clicking on then navigates to the symbol definition." autoplay loop controls muted></video>

You can also hover over the symbol link to see which file the symbol is defined in:

![Hovering over a symbol link to see the file it's defined in](https://code.visualstudio.com/assets/updates/1_95/copilot-symbol-link-hover.png)

To start exploring a symbol in more detail, just right-click on the symbol link to bring up a context menu with options, such as **Go to Implementations** and **Go to References**:

![Using the context menu on a symbol link to learn more about a symbol](https://code.visualstudio.com/assets/updates/1_95/copilot-symbol-link-context-menu.png)

Basic symbol links should work for any language that supports Go to Definition. More advanced IntelliSense options, such Go to Implementations, also require support for that language. Make sure to install language extensions to get the best symbol support for any programming languages used in Copilot responses.

### Fix using Copilot action in the Problem hover

The Problem hover now includes the action to fix the problem using Copilot. This action is available for problems that have a fix available, and the fix is generated by Copilot.

![The Problem hover showing a fix using Copilot action](https://code.visualstudio.com/assets/updates/1_95/copilot-fix-problem-hover.png)

### Workspace indexing

[`@workspace`](https://code.visualstudio.com/docs/copilot/copilot-chat#_workspace) lets you ask questions about code in your current project. This is implemented using either [GitHub's code search](https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search) or a smart local index that VS Code constructs. This milestone, we added a few more UI elements that let you understand how this workspace index is being used.

First up, the new **GitHub Copilot: Build Local Workspace index** command lets you explicitly start indexing the current workspace. This indexing is normally kicked off automatically the first time you ask a `@workspace` question. With the new command, you can instead start indexing at any time. The command also enables indexing of larger workspaces, currently up to 2000 files (not including ignored files, such as the `node_modules` or `out` directories).

While the index is being built, we now also show a progress item in the status bar:

![A status bar item showing the progress of indexing the current workspace](https://code.visualstudio.com/assets/updates/1_95/copilot-workspace-ui-progress.png)

Indexing workspaces with many hundreds of files can take a little time. If you try to ask an `@workspace` question while indexing is being constructed, instead of waiting, Copilot will try to respond quickly by using a simpler local index that can be built up more quickly. We now show a warning in the response when this happens:

![A warning showing on a response telling the user the Copilot user](https://code.visualstudio.com/assets/updates/1_95/copilot-workspace-ui-warning.png)

Notice that Copilot was still able to answer the question in this case, even though it used the simpler local index instead of the more advanced one. That's often the case, although more ambiguous or complex questions might only be answerable once the smarter index has been constructed. Also keep in mind that if your workspace is backed by a GitHub repository, we can instead use [GitHub's code search](https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search) to answer questions. That means that code search is used instead of the simpler local index.

### Chat follow-up improvements

The follow-up prompts suggested by Chat are now more concise and only appear on the first turn to make room for the conversation. The new setting **Setting**: `setting(github.copilot.chat.followUps)` allows changing this new behavior from `firstOnly` to `always` (every turn) or `never` (disables follow-ups).

### Chat settings updates

As we continue to add new features to GitHub Copilot, we want to make it easier to check out what's new and ready to try out. We've restructured our settings and added support [for tagging preview and experimental settings](#settings-editor-indicator-for-experimental-and-preview-settings).

New features may go through the following early access stages, which are described in the settings editor as follows:

**Experimental** This setting controls a new feature that is actively being developed and may be unstable. It is subject to change or removal.

**Preview** This setting controls a new feature that is still under refinement yet ready to use. Feedback is welcome.

You can check out all of GitHub Copilot's [preview features](https://github.com/microsoft/vscode-copilot-release/blob/HEAD/command:workbench.action.openSettings?%5B%22%40tag%3Apreview%20%40ext%3Agithub.copilot-chat%22%5D) using `@tag:preview` in the Settings editor and all of the [experimental features](https://github.com/microsoft/vscode-copilot-release/blob/HEAD/command:workbench.action.openSettings?%5B%22%40tag%3Aexperimental%20%40ext%3Agithub.copilot-chat%22%5D) using `@tag:experimental`.

### File-based custom instructions enabled by default (Preview)

**Setting**: `github.copilot.chat.codeGeneration.useInstructionFiles`

The newly introduced `.github/copilot-instructions.md` file lets you document code-specific conventions for Copilot in your workspace or repository. With this release, the setting is enabled by default in VS Code, so chat conversations automatically include this file if it is present in the workspace. You can verify which instructions are added to a chat request in the *Used references* list. Learn more about [customizing Copilot with instructions](https://code.visualstudio.com/docs/copilot/copilot-customization).

### Sort by relevance in Semantic Search (Experimental)

**Setting**: `github.copilot.chat.search.semanticTextResults`

Last milestone, we introduced the ability to perform a semantic search using Copilot to get search results that are semantically relevant to your query. We have now improved the search results by sorting them by their relevance. Keyword matches from more relevant snippets are deemed more relevant overall.

---

## 0.21 (2024-10-02)

GitHub Copilot updates from [September 2024](https://code.visualstudio.com/updates/v1_94):

### Switch language models in chat

Previously, we announced that you can [sign up for early access to OpenAI o1 models](https://github.com/o1-waitlist-signup). Once you have access, you will have a [**Copilot Chat model picker**](https://code.visualstudio.com/updates/v1_94#_github-copilot) control in Copilot Chat in VS Code to choose which model version to use for your chat conversations.

![Copilot model picker control in the Chat view enables switching to another language model.](https://code.visualstudio.com/assets/updates/1_94/copilot-model-picker.png)

### Use GPT-4o in Inline Chat

We've upgraded Copilot Inline Chat to GPT-4o, to give you faster, more accurate, and higher-quality code and explanations when you use Chat in the editor.

### Public code matching in chat

You can allow GitHub Copilot to return code that could match publicly available code on GitHub.com. When this functionality is enabled for your [organization subscription](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching) or [personal subscription](https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code), Copilot code completions already provided you with details about the matches that were detected. We now show you these matches for public code in Copilot Chat as well.

If this is enabled for your organization or subscription, you might see a message at the end of the response with a **View matches** link. If you select the link, an editor opens that shows you the details of the matching code references with more details.

![Chat code referencing example.](https://code.visualstudio.com/assets/updates/1_94/code-references.png)

Get more information about [code referencing in GitHub Copilot](https://github.blog/news-insights/product-news/code-referencing-now-generally-available-in-github-copilot-and-with-microsoft-azure-ai/) on the GitHub Blog.

### File suggestions in chat

In chat input fields you can now type `#<filename>` to get file names suggested and attached. This works in chat locations that support file attachments, such as panel-chat, quick-chat, inline- and notebook-chat.

<video src="https://code.visualstudio.com/assets/updates/1_94/chat-file-complete.mp4" title="File suggestions when typing #filename" autoplay loop controls muted></video>

### Improved file links in chat responses

We've improved rendering of any workspace file paths mentioned in Copilot responses. These paths are very common when asking [`@workspace`](https://code.visualstudio.com/docs/copilot/copilot-chat.md#workspace) questions.

The first thing you'll notice is that paths to workspace files now include a file icon so that the type of file can be easily distinguished (these file icons are based on your current [file icon theme](https://code.visualstudio.com/docs/getstarted/themes.md#file-icon-themes)):

![Paths to workspace files in the response now render using file icons](https://code.visualstudio.com/assets/updates/1_94/copilot-path-overview.png)

These paths are clickable links, so just click on them to open the corresponding file. You can even use drag and and drop to open the file in a new editor group or insert it into a text editor by holding <kbd>shift</kbd> before dropping:

<video src="https://code.visualstudio.com/assets/updates/1_94/copilot-path-dnd.mp4" title="Dragging and dropping a workspace file from copilot into the editor" autoplay loop controls muted></video>

By default these links only show the file name but you can hover over them to see the full file path:

![Hovering over a workspace path to see the full workspace path](https://code.visualstudio.com/assets/updates/1_94/copilot-path-hover.png)

You can also right click on one of these paths to open a context menu with additional commands, including copying a relative path to the resource or revealing it in your operating system's explorer:

![The right context menu for a workspace path](https://code.visualstudio.com/assets/updates/1_94/copilot-path-right-click.png)

We plan to continue improving workspace path rendering in the coming iterations, as well as making similar improvements to symbol names in responses.

### Drag and drop files to add chat context

You can now easily attach additional files as context for a chat prompt by dragging files or editor tabs from the workbench directly into chat. By holding `Shift`, you can drop a file into Inline Chat instead of opening it in the editor to add it as context.

<video src="https://code.visualstudio.com/assets/updates/1_94/copilot-attach-dnd.mp4" title="Dragging files and editors into chat" autoplay loop controls muted></video>

### File attachments included in history

There are multiple ways to attach a file or editor selection as relevant context to your chat request, for example by using the 📎 button or typing `#`. Previously, this context was added only for the current request but was not included in the history of follow-on requests. Now, these attachments are kept in history, so that you can keep asking about them without having to reattach this context.

![persistent file attachments](https://code.visualstudio.com/assets/updates/1_94/file-attachment.png)

### Inline Chat and completions in Python native REPL

The native REPL editor used by the Python extension now supports Copilot Inline Chat and code completions directly in the input box.

<video src="https://code.visualstudio.com/assets/updates/1_94/copilot-in-REPL.mp4" title="Title" autoplay loop controls muted></video>

### Accept and run in notebook

When you use Copilot to generate code in a notebook, you can now accept the response and run it directly from the Inline Chat toolbar.

<video src="https://code.visualstudio.com/assets/updates/1_94/notebook-accept-run.mp4" title="Title" autoplay loop controls muted></video>

### Attach variable in notebook chat requests

When using Copilot in a notebook, you can now attach variables from Jupyter kernel in your requests, via either `#kernelVariable` completions, or by using the **Attach Context** (`kb(workbench.action.chat.attachContext`) action from the Inline Chat control. Adding variables gives you more precise control over the context of your requests in Jupyter notebooks.

<video src="https://code.visualstudio.com/assets/updates/1_94/notebook-kernel-variable.mp4" title="Title" autoplay loop controls muted></video>

### Refreshed welcome view and chat input

We've refreshed the chat panel with a clean new welcome view, and we've updated the layout of the chat input. We've added a `@` button to make it easier to find chat participants that are built-in or from chat extensions that you've installed. You can also still find these by typing `/` or `@` as you could before.

![welcome view](https://code.visualstudio.com/assets/updates/1_94/chat-welcome.png)

### Semantic search results

**Setting**: `github.copilot.chat.search.semanticTextResults`

The Search view enables you to perform an exact search across your files. We have now added a semantic search functionality to the Search view that uses Copilot to give search results that are semantically relevant.

Notice in the screenshot that the text results only contain exact matches for "diff view", whereas the GitHub Copilot results also have relevant matches for "merge editor".

<video controls src="https://code.visualstudio.com/assets/updates/1_94/semantic-search-in-search-view.mp4" title="Semantic Search in Search View"></video>

This functionality is still in preview and by default, the setting is not enabled. Try it out and let us know what you think!

### Fix test failure (Preview)

**Setting**: `github.copilot.chat.fixTestFailure.enabled`

We've added specialized logic to help you to diagnose the reasons why unit tests fail. This logic is triggered in some scenarios with `/fix`, and you can also invoke it through the `/fixTestFailure` slash command. The command is enabled in chat by default but can be disabled via the setting `github.copilot.chat.fixTestFailure.enabled`.

### Automated test setup (Experimental)

**Setting**: `github.copilot.chat.experimental.setupTests.enabled`

We added an experimental `/setupTests` slash command that can recommend a testing framework for your workspace, provide steps to setup and configure it, and recommend a VS Code extension to provide [testing integration in VS Code](https://code.visualstudio.com/docs/editor/testing). This can save you time and effort to get started with testing for your code.

When you use the `/tests` command to generate tests for your code, it can recommend `/setupTests` and testing extensions if looks like such an integration has not been set up yet in your workspace.

### Start debugging from Chat (Experimental)

**Setting**: `github.copilot.chat.experimental.startDebugging.enabled`

In this milestone, we made improvements to the experimental `/startDebugging` slash command. This command enables you to easily find or create a launch configuration and start debugging your application seamlessly. When you use `@vscode` in Copilot Chat, `/startDebugging` is now available by default.

![A user types /startDebugging flask app port 3000 in the panel chat and is provided with the launch configuration](https://code.visualstudio.com/assets/updates/1_94/start-debugging.png)

### Chat in Command Center (Experimental)

We are experimenting with a command center entry for chat. It provides quick access to all chat relevant commands, like starting chat or attaching context. You can enable this via `chat.commandCenter.enabled` but note that the command center itself needs to be enabled as well.

![Chat Command Center](https://code.visualstudio.com/assets/updates/1_94/chat-command-center.png)

### Improved temporal context (Experimental)

With the `github.copilot.chat.experimental.temporalContext.enabled` setting, you can instruct Inline Chat to consider files that you have opened or edited recently. We have improved this feature and invite everyone to give it a go.

## Previous release: https://code.visualstudio.com/updates
