window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	//	Your block menu Only css class
	let blockMenu = 'info-header',
		//	Your tab
		tabs = 'info-header-tab',
		//  Your content block
		content = 'info-tabcontent';
	let info = document.querySelector('.' + blockMenu),
		tab = document.querySelectorAll('.' + tabs),
		tabContent = document.querySelectorAll('.' + content);
	// TAB CONTENT
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	//TAB CLICK
	info.addEventListener('click', function (e) {
		let target = e.target;
		if (target && target.classList.contains(tabs)) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//Timer
	let deadline = '2019-11-29',
		timerID = 'timer';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));
		if (hours < 0) {
			hours = 0;
			minutes = 0;
			seconds = 0;
		}
		seconds = seconds < 10 ? seconds = '0' + seconds : seconds;
		minutes = minutes < 10 ? minutes = '0' + minutes : minutes;
		hours = hours < 10 ? hours = '0' + hours : hours;
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'second': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minute = timer.querySelector('.minutes'),
			second = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minute.textContent = t.minutes;
			second.textContent = t.second;
			if (t.total < 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock(timerID, deadline);

	//Modal
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	class Options {
		constructor(height, widtdh, bg, fontSize, textAlign) {
			this.height = height;
			this.widtdh = widtdh;
			this.bg = bg;
			this, fontSize = fontSize;
			this.textAlign = textAlign;
		}
		newDiv() {
			let div = document.createElement('div');
			div.classList.add('div_test');
			document.querySelector('.content').appendChild(div);
			let perem = `height:${this.height}px; width:${this.widtdh}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
			div.style.cssText = perem;
		}
	}
	let redDiv = new Options (100, 200, 'blue', 22, 'center');
	redDiv.newDiv();
});

// 1) Просто вызов функции window/undefined
// 2) Метод обьекта - this = обьект
// 3) Конструктор (new) - this = новый созданный обьект
// 4) Указание конкретного контекста call, apply, bind