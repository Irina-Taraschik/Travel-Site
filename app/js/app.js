// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {
	
	const items = [...document.querySelectorAll('.first-section__background-picture')];
	const left = document.querySelector('#left');
	const right = document.querySelector('#right');
	const count = document.querySelector('.first-section__numbers-number');
	
	let el = 0;
	function firstRender(params) {
		items.forEach((el, i) => {
			if (i === 0) {
				el.classList.add('active')
			}
		})
		count.textContent = el + 1
	}
	firstRender();

	function changeSlide() {
		
		items.forEach((el) => {
			el.classList.remove('active')
		})
		items[el].classList.add('active')
		count.textContent = el + 1
	}

	left.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('left', el);
		if (el === 0) {
			el = items.length - 1
		} else {
			el = el - 1
		}
		changeSlide()
	})

	right.addEventListener('click', (event) => {
		if (!event.isTrusted) return; //for webpack
		console.log('right', el);
		if (el === items.length - 1) el = 0
		else el = el + 1
		changeSlide()
	})
	//form
// 	const form = document.querySelector('.form');
// 	const select = document.querySelector('.select');
// 	const text = document.querySelector('.text');
// 	const date = document.querySelector('.date');
// 	const range = document.querySelector('.range');
// 	const pass = document.querySelector('.pass');
// 	const changeType = document.querySelector('.change-type');

// 	let password = ''

// 	changeType.addEventListener('click', (e) => {
// 		if (!e.isTrusted) return; //for webpack
// 		console.log(password);
// 		pass.value = password
// 		pass.type = 'text'
		
// 	})
// 	text.addEventListener('change', (e) => {
// 		console.log('text', e.target.value);
// 	})
// 	pass.addEventListener('change', (e) => {
// 		console.log('text', e.target.value);
// 		password = e.target.value;
// 	})

// 	date.addEventListener('change', (e) => {
// 		console.log('date', e.target.value);
// 	})
// 	range.addEventListener('change', (e) => {
// 		console.log('range', e.target.value);
// 	})

// 	select.addEventListener('change', (event) => {
// 		if (!event.isTrusted) return; //for webpack
// 		console.log(event);
// 	})

// 	form.addEventListener('submit', (event) => {
// 		if (!event.isTrusted) return; //for webpack
// 		event.preventDefault();
// 		form.reset();
// 	})
	
	
	
})

