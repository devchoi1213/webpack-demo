import _ from 'lodash';
import printMe from './print.js';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	// 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());