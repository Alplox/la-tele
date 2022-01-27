module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,txt,png,ico,js,html,md,webmanifest}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};