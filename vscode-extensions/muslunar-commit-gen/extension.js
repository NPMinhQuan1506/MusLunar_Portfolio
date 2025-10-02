const vscode = require('vscode');
const path = require('path');

function activate(context) {
  const disposable = vscode.commands.registerCommand('generateCommitMessage.generate', async () => {
    try {
      const gitExtension = vscode.extensions.getExtension('vscode.git');
      if (!gitExtension) {
        vscode.window.showErrorMessage('Git extension not found. Enable the built-in Git extension.');
        return;
      }

      if (!gitExtension.isActive) {
        await gitExtension.activate();
      }

      const git = gitExtension.exports.getAPI(1);
      if (!git?.repositories?.length) {
        vscode.window.showWarningMessage('No Git repository detected.');
        return;
      }

      const repo = git.repositories[0];
      const changes = repo.state.indexChanges.length
        ? repo.state.indexChanges
        : repo.state.workingTreeChanges;

      if (!changes.length) {
        repo.inputBox.value = 'chore: update project';
        vscode.window.setStatusBarMessage('No changes detected. Suggested a generic commit message.', 2500);
        return;
      }

      const relativePaths = changes.map(change => {
        const fsPath = change.uri.fsPath;
        const rel = path.relative(repo.rootUri.fsPath, fsPath) || path.basename(fsPath);
        return rel.replace(/\\/g, '/');
      });

      const commitMessage = buildCommitMessage(relativePaths);
      repo.inputBox.value = commitMessage;
      vscode.window.setStatusBarMessage('Generated commit message applied.', 2000);
    } catch (error) {
      console.error(error);
      vscode.window.showErrorMessage(`Failed to generate commit message: ${error.message}`);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

function buildCommitMessage(paths) {
  const type = detectType(paths);
  const scope = detectScope(paths);
  const subject = detectSubject(paths);
  return `${type}${scope ? `(${scope})` : ''}: ${subject}`;
}

function detectType(paths) {
  if (paths.every(p => p.startsWith('docs/') || p.endsWith('.md'))) {
    return 'docs';
  }
  if (paths.every(p => p.startsWith('src/') || p.startsWith('app/'))) {
    return 'feat';
  }
  if (paths.every(p => p.startsWith('test/') || /\.test\./.test(p))) {
    return 'test';
  }
  if (paths.every(p => p.startsWith('.github/') || p.startsWith('.vscode/'))) {
    return 'chore';
  }
  if (paths.some(p => /package(-lock)?\.json$/.test(p))) {
    return 'chore';
  }
  return 'chore';
}

function detectScope(paths) {
  const topLevels = new Set(
    paths
      .map(p => p.split('/')[0])
      .filter(Boolean)
      .map(segment => segment.replace(/[^a-zA-Z0-9_-]/g, ''))
  );

  if (topLevels.size === 1) {
    const [only] = Array.from(topLevels);
    if (only === 'src') {
      return 'ui';
    }
    if (only === 'docs') {
      return 'docs';
    }
    if (only === 'test') {
      return 'tests';
    }
    if (only === '.vscode') {
      return 'tooling';
    }
    return only;
  }

  return '';
}

function detectSubject(paths) {
  if (paths.length === 1) {
    return `update ${prettify(path.basename(paths[0]))}`;
  }

  const mapped = categorize(paths);
  if (mapped.length) {
    return `update ${mapped.join(' & ')}`;
  }

  return 'update project files';
}

function categorize(paths) {
  const buckets = new Map();
  paths.forEach(p => {
    const top = p.split('/')[0];
    if (!buckets.has(top)) {
      buckets.set(top, 0);
    }
    buckets.set(top, buckets.get(top) + 1);
  });

  return Array.from(buckets.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([dir]) => prettify(dir || 'project'));
}

function prettify(text) {
  return text
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b([a-z])/g, (_, char) => char.toUpperCase())
    .trim();
}

module.exports = {
  activate,
  deactivate
};
