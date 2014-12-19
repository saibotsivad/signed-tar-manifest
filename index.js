module.exports = function signedTarManifest(options) {
	options = options || {}
	options.key = options.key || ''
	options.files = options.files || []

	return '[manifest]\n'
		+ 'key=' + options.key + '\n'
		+ options.files.map(function(f) {
			return f.hash + '=' + f.file
		}).join('\n')
}
