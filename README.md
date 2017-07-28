# signed-tar-manifest

[![Greenkeeper badge](https://badges.greenkeeper.io/saibotsivad/signed-tar-manifest.svg)](https://greenkeeper.io/)

Simple manifest generator to act as the authoritative implementation of
the [signed tar manifest](https://github.com/sdmp/signed-tar) specs.

```js
var makeManifest = require('signed-tar-manifest')
var options = {
	key: '751306bfafae00f2417a7b7c7b7750e263838dc1',
	files: [
		{
			hash: '84784533571ed086a3cdff9fd41f89b43863a7314660442616fd02ee51a9608b',
			file: 'file.ext'
		}, {
			hash: '3de4c18609d8069edf84538a0b4d27140565b72f894c35701a3a737353cb5fe3',
			file: 'folder path/file.ext'
		}
	]
}
var manifest = makeManifest(options)
```

The output of this would look like:

```txt
[manifest]
key=751306bfafae00f2417a7b7c7b7750e263838dc1
84784533571ed086a3cdff9fd41f89b43863a7314660442616fd02ee51a9608b=file.ext
3de4c18609d8069edf84538a0b4d27140565b72f894c35701a3a737353cb5fe3=folder path/file.ext
```

# license

Licensed under the [VOL](http://veryopenlicense.com).


