const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	// index.html 파일을 output 폴더에 생성 (모든 번들이 자동으로 추가)
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
		}),
	],
	output: {
		// 출력 번들 이름이 엔트리 포인트 이름을 기반으로 동적으로 생성
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,	// 빌드에서 생성된 파일만 남기고 dist 폴더 정리
	},
};