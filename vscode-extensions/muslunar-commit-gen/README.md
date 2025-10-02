# MusLunar Commit Generator

A lightweight VS Code extension that adds a "Generate Commit Message" button next to the Git commit message box. It inspects current changes and suggests a conventional-style commit message.

## Features
- Inserts a sparkle icon button directly inside the Source Control input.
- Analyses staged changes (fallback to unstaged) to generate a scoped message.
- Applies simple heuristics for docs, code, tests, tooling.

## Installation (local workspace)
1. Install the `vsce` CLI if you do not have it yet:
   ```bash
   npm install -g @vscode/vsce
   ```
2. From this folder, package the extension:
   ```bash
   vsce package
   ```
   This creates a `.vsix` file.
3. In VS Code, run the command **Extensions: Install from VSIX...** and select the generated `.vsix`.
4. Reload the window when prompted.

## Usage
- Open the Source Control view.
- Stage the files you want included (optional).
- Click the sparkle icon next to the commit message input (or run **MusLunar: Generate Commit Message** from the Command Palette).
- The input box is populated with the suggestion; adjust as needed.

## Notes
- The generator uses simple heuristics; review the message before committing.
- Enhancements (e.g. integrating with an AI API) can be added in `extension.js`.
