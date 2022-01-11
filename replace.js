const replace = require('replace')

replace({
	regex: '/images/',
	replacement: './images/',
	paths: ['impact'],
	recursive: true,
	silent: false,
})

replace({
	regex: '/files/',
	replacement: './files/',
	paths: ['impact'],
	recursive: true,
	silent: false,
})

// replace({
// 	regex: '/assets/',
// 	replacement: 'nuxtfiles/',
// 	paths: ['impact'],
// 	recursive: true,
// 	silent: false,
// })

// replace({
// 	regex: '(href|src|"href"|"src")="/',
// 	replacement: '$1="../',
// 	paths: ['impact'],
// 	recursive: true,
// 	silent: false,
// })

// replace({
// 	regex: '(href|src|"href"|"src"):"/',
// 	replacement: '$1:"../',
// 	paths: ['impact'],
// 	recursive: true,
// 	silent: false,
// })

// replace '/nuxtfiles/' 'nuxtfiles/' cordova/www --recursive

// replace '/static-assets/' 'static-assets/' cordova / www--recursive

// replace '/assets/' 'nuxtfiles/' cordova / www--recursive

// replace '(href|src|\"href\"|\"src\")=\"/' '$1=\"../' cordova / www--recursive

// replace '(href|src|\"href\"|\"src\"):\"/' '$1:\"../' cordova/www --recursive"
