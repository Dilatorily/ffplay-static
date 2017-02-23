const os = require('os');
const path = require('path');

const platform = os.platform();
const arch = os.arch();

if (platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.');
  process.exit(1);
}

if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

exports.default = path.join(__dirname, 'bin', platform, arch, platform === 'win32' ? 'ffplay.exe' : 'ffplay');
