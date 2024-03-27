let langs = document.querySelector('.footer__language');
let link = document.querySelectorAll('.footer__lang')
let logo = document.querySelector('.logo');

link.forEach(el => {
	el.addEventListener('click', () => {
		langs.querySelector('.active').classList.remove('active');
		el.classList.add('active');

		let attr = el.getAttribute('language');

		logo.textContent = data[attr].logo
	})
})



let data = {
	english: {
		logo: 'Artificial Intelligence'
	},
	russian: {
		logo: 'Искусственный интеллект'
	}
}