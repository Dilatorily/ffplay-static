# ffplay-static
ffplay static binaries for Windows and macOS

## Installation
Use NPM to install this module:
```bash
$ npm install --save ffplay-static
```

## Usage
This module supports Windows ([32-bit](https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-3.2.2-win32-static.zip) and [64-bit](https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-3.2.2-win64-static.zip)) and macOS ([64-bit](https://evermeet.cx/pub/ffplay/ffplay-3.2.2.7z)).
```javascript
var ffplay = require('ffplay-static');
console.log('ffplay'); // /path/to/ffplay
```

## Static Binaries
The static binaries are downloaded from the official FFmpeg website.

- [Windows](https://ffmpeg.zeranoe.com/builds/)
- [macOS](https://evermeet.cx/ffmpeg/)

## [License](LICENSE)
This repository is open source and distributed under the GPL-3.0 License.
