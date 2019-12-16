// // let timerId = setTimeout(sayHello, 3000);
// // clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello(){
// 	console.log('Hello World');
// }

// let timerId = setTimeout(function log(){
// 		console.log('Hello');
// 		setTimeout(log, 2000);
// });
let btn = document.querySelector('button'),
	elem = document.querySelector('.box');

function myAnimations() {
	let pos = 0;
	let id = setInterval(frame, 1);

	function frame() {
		if (pos == 400) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}
btn.addEventListener('click', myAnimations);

let btnBlock = document.querySelector('.wrapper_btn'),
	btns = document.querySelectorAll('.wrapper_btn button');

btnBlock.addEventListener('click', function (event) {
	if(event.target && event.target.matches('button.first')){
		console.log('Hello');
	}
});