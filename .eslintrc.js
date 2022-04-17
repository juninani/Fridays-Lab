/* eslint-disable prettier/prettier */
module.exports = {
	parser: "@babel/eslint-parser",
	extends: ["naver", "plugin:prettier/recommended"],
	env: { browser: true, node: true },
	plugins: ["eslint-plugin-prettier"],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
	},
	rules: {
		"prettier/prettier": ["error"],
		// "indent": ["error", 4],
		// "prettier/prettier": ["error", { "tabWidth": 4 }]
	},
};

// module.exports = {
//     env: {
//         browser: true,
//         es6: true,
//         node: true,
//     },
//     plugins: [],
//     extends: ['naver', 'plugin:prettier/recommended'],
//     rules: {
//         'prettier/prettier': 'error',
//     },
//     ignorePatterns: ['node_modules/'],
// };
