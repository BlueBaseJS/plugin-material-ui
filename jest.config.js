const configs = require('@bluebase/code-standards/jest.config');

const modules = [
	'expo',
	'react-native',
	'react-router-native',
	'react-navigation-stack',
	'react-navigation',
	'rn-placeholder',
	'@unimodules',
	'@react-navigation/native',
	'expo-local-authentication',
	'react-native-gesture-handler',
	'@bluebase/plugin-vector-icons/node_modules/react-native-vector-icons',
].join('|');

module.exports = Object.assign(configs, {
	preset: 'jest-expo',
	transformIgnorePatterns: [`/node_modules/(?!${modules})`],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90
		}
	},
});
