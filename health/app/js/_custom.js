document.addEventListener("DOMContentLoaded", function () {

	let scroll = new SmoothScroll('a[href*="#"]', {
		// header: '[data-scroll-header]',
		speed: 400,
	});

	// new Glide('.glide', {
	// 	type: 'carousel',
	// 	autoplay: 5000,
	// 	hoverpause: true,
	// }).mount()

	//tns-nav
	const slider = tns({
		container: '.header__slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		controls: false,
		navPosition: 'bottom',
		mouseDrag: true,
		autoHeight: false,
		autoplayTimeout: 5000,
		autoplayButtonOutput: false,
		// controlsContainer: '.reviews__nav'
		// navContainer: '.reviews__nav'



	});
	const inputWrap = document.querySelector('.email__input-wrap')

	const form = document.querySelector('.email__form')
	const input = document.querySelector('.email__input')
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	input.addEventListener('input', function () {
		inputWrap.classList.remove('email__input-wrap_err')
	})
	form.addEventListener('submit', function (e) {
		e.preventDefault()
		if (input.value.match(mailformat)) {
			opensuccess();
			input.value = ""


		} else {
			inputWrap.classList.add('email__input-wrap_err')

		}
	})



	let success = document.querySelector('.success');

	let successWraper = document.querySelector('.success__wraper')
	let successClose = document.querySelector('.success__close')

	function opensuccess() {
		success.style.display = "flex";
		document.body.classList.add('.success__body')
		successWraper.classList.add('success__show')
	}

	function closesuccess() {
		success.style.display = "none"
		document.body.classList.remove('.success__body')
		successWraper.classList.remove('success__show')
	}
	successClose.addEventListener('click', closesuccess)
	success.addEventListener('click', closesuccess)
	successWraper.addEventListener('click', function () {
		event.stopPropagation()
	})


	// const slider = tns({
	// 	container: '.header__slider',
	// 	items: 1,
	// 	slideBy: 'page',
	// 	mode: "carousel",
	// 	autoplay: true,
	// 	controls: false,
	// 	autoplayButtonOutput: false,

	// 	navPosition: 'bottom',
	// 	mouseDrag: true,
	// 	autoplayHoverPause: true,

	// 	autoplayTimeout: 5000,
	// 	center: true
	// 	// controlsContainer: '.reviews__nav'
	// 	// navContainer: '.reviews__nav'





});