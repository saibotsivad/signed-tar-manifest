var test = require('tap').test
var signedTarManifest = require('../index.js')

test('generic manifest', function(t) {
	var options = {
		files: [
			{ hash: 'abc', file: 'file1.ext' },
			{ hash: 'def', file: 'file2.ext' }
		],
		key: 'ghi'
	}

	var manifest = signedTarManifest(options)

	var expectedManifest = '[manifest]\nkey=ghi\nabc=file1.ext\ndef=file2.ext'

	t.equal(manifest, expectedManifest, 'manifest should be the expected string')
	t.end()
})
