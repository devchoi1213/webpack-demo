import _ from 'lodash';
import './style.css';

function component() {
	const element = document.createElement('div');

	// 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	// 요소의 클래스명 리스트를 반환 (DOMTokenList)
	// 요소의 클래스명 리스트에 hello를 추가
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());