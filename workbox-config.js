module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,ico,js,html,webmanifest}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};