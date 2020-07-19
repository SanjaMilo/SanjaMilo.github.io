
$(function() {

	// Footer button to scroll to the top of the page

	let scrollBtn = $('.scroll-top');

	function scrollToTop() {
		$('html, body').animate(
			{
				scrollTop: $('html, body').offset().top
			},
			3000
		);
	}

	scrollBtn.click(scrollToTop);

	// Menu button and opening sub-menu on mobile devices

	let closeBtn = $('#close-menu-btn');
	let isClicked = false;
	let menuLinks = $('.nav-links');

	function closeOpenMenu() {
		isClicked = ! isClicked;
		console.log(isClicked);
		if (isClicked === false) {
			menuLinks.css('display', 'none');
		} else {
			menuLinks.css('display', 'block');
		}
	};

	closeBtn.on('click', closeOpenMenu);


	//scrollSpy function

	function scrollSpy() {
		let sections = [ 'home', 'about', 'resume', 'works', 'interests', 'contact' ];
		let current;

		for (let i = 0; i < sections.length; i++) {
			if ($('#' + sections[i]).offset().top <= $(window).scrollTop() + 79) {
				current = sections[i];
			}
		}

		$(".top-scroll-links a[href='#" + current + "']").addClass('active');
		$('.top-scroll-links a').not("a[href='#" + current + "']").removeClass('active');
	}

	// smooth scrolling navigation

	$('.top-scroll-links a').click(function() {
		let target = $(this).attr('href');
		$('body, html').animate(
			{
				scrollTop: $(target).offset().top - 74
			},
			1000
		);
		return false;
	});

	scrollSpy();

	$(window).scroll(function() {
		scrollSpy();
	});

	
});
