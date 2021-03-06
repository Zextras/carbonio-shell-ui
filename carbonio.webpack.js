/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const commitHash = require('child_process').execSync('git rev-parse HEAD').toString().trim();

const baseStaticPath = `/static/iris/carbonio-shell-ui/${commitHash}/`;

module.exports = (conf, pkg, options, mode) => {
	const server = `https://${options.host}`;
	const root = 'carbonio';
	conf.entry = {
		index: path.resolve(process.cwd(), 'src', 'index.tsx')
	};
	conf.output.filename =
		mode === 'development' ? 'zapp-shell.bundle.js' : '[name].[chunkhash:8].js';
	conf.resolve.extensions.push('.d.ts');
	conf.plugins.push(
		new CopyPlugin({
			patterns: [
				{
					from: 'assets/',
					to: ''
				}
			]
		}),
		new DefinePlugin({
			COMMIT_ID: JSON.stringify(commitHash.toString().trim()),
			BASE_PATH: JSON.stringify(baseStaticPath)
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(process.cwd(), 'src', 'index.template.html'),
			chunks: ['index'],
			BASE_PATH: baseStaticPath
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: path.resolve(process.cwd(), 'commit.template'),
			filename: 'commit',
			COMMIT_ID: commitHash
		})
	);
	conf.devServer = {
		port: options.port,
		historyApiFallback: {
			index: `${baseStaticPath}/index.html`,
			rewrites: [
				{
					from: new RegExp(`/${root}/*`),
					to: `${baseStaticPath}/index.html`
				}
			]
		},
		server: 'https',
		open: [`/${root}/`],
		proxy: [
			{
				context: ['/static/login/**'],
				target: server,
				secure: false,
				cookieDomainRewrite: {
					'*': server,
					[server]: `localhost:${options.port}`
				}
			},
			{
				context: ['!/static/iris/carbonio-shell-ui/**/*', `!/${root}/`, `!/${root}/**/*`],
				target: server,
				secure: false,
				logLevel: 'debug',
				cookieDomainRewrite: {
					'*': server,
					[server]: `localhost:${options.port}`
				}
			}
		]
	};
	conf.externals = {};
	return conf;
};
