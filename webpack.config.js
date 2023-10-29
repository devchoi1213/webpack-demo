const path = require('path');

module.exports = {
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	output: {
		// 출력 번들 이름이 엔트리 포인트 이름을 기반으로 동적으로 생성
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};