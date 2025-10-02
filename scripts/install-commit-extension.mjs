import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const extensionDir = path.join(repoRoot, 'vscode-extensions', 'muslunar-commit-gen');

async function main() {
  const pkgPath = path.join(extensionDir, 'package.json');
  const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));
  const vsixName = `${pkg.name}-${pkg.version}.vsix`;
  const vsixPath = path.join(extensionDir, vsixName);

  console.log(`?? Packaging ${pkg.displayName || pkg.name} (${pkg.version})...`);
  await run('npx', ['--yes', 'vsce', 'package', '--out', vsixPath], { cwd: extensionDir });

  console.log(`??  Installing ${vsixName} into VS Code...`);
  await run('code', ['--install-extension', vsixPath, '--force']);

  console.log('? Commit message generator installed.');
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
      ...options
    });

    child.on('error', reject);

    child.on('close', code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

main().catch(error => {
  console.error(`? ${error.message}`);
  process.exit(1);
});
