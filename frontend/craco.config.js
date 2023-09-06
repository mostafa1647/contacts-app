/**
 * using carco to customize Create React App webpack configuration
 * @see https://github.com/gsoft-inc/craco
 * @see https://github.com/DocSpring/craco-less
 */

const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#1b4332",
							"@link-color": "#40916c",
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
