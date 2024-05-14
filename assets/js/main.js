$(window).on('load', function() {

	// Footer button to scroll to the top of the page
	let scrollBtn = $('.scroll-top');

	function scrollToTop() {
		$('html, body').animate(
			{
				scrollTop: $('html, body').offset().top 
			},
			3000
		);
	};

	scrollBtn.click(scrollToTop);

	// Menu button and opening sub-menu on mobile devices

	let closeBtn = $('#close-menu-btn');
	let isClicked = false;
	let menuLinks = $('.nav-links');

	function closeOpenMenu(e) {
		e.stopPropagation(); // stop bubbling up to parent elements (document)
		isClicked = !isClicked;
		console.log(isClicked);
		if (isClicked === false) {
			menuLinks.css('display', 'none');
		} else {
			menuLinks.css('display', 'block');
		}
	};

	closeBtn.on('click', closeOpenMenu);
	// Close the menu links on outside click (document):
	$(document).on('click', function() {
		if (isClicked === true) {
			menuLinks.css('display', 'none');
			isClicked = !isClicked;
		}
	});

	// Show and hide Navbar on window scroll
	let prevScrollPos = window.pageYOffset;
	let topNav = document.getElementById('top-nav');

	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollPos > currentScrollPos) {
			topNav.style.top = '0';
		} else {
			topNav.style.top = '-80px';
		}
		prevScrollPos = currentScrollPos;

		if (window.innerWidth < 769) {
			isClicked = false;
			menuLinks.css('display', 'none');	
		}
	};

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
	};

	// smooth scrolling navigation

	$('.top-scroll-links a').click(function() {
		let target = $(this).attr('href');

		if ($(window).width() > 768) {
			$('body, html').animate(
				{
					// scrollTop: $(target).offset().top - 74
					scrollTop: $(target).offset().top + 5
				},
				1000
			);
		} else {
			$('body, html').animate(
				{
					scrollTop: $(target).offset().top
				},
				1000
			);
		}
		return false;
	});

	scrollSpy();

	$(window).scroll(function() {
		scrollSpy();
	});

	// Animation on the title letters in the Resume section (listen on mouse leave)
	function animationText(target) {
		$(target).each(function(index) {
			var characters = $(target).text().split('');
			// console.log(characters); // test
			$(target).empty();
			$.each(characters, function(i, el) {
				$(target).append(`<span class="letters">${el}</span>`);
			});
		});
		// ANIMATION (loop false means not to repeat animation, just one time animation (true, means infinite loop) .
		anime.timeline({ loop: false }).add({
			targets: `${target} .letters`, // css selector
			scale: [ 3, 1 ], // 3 to 1
			opacity: [ 0, 1 ], // 0 to 1 to show it
			duration: 900, // 900 milliseconds
			easing: 'easeInOutExpo', // easing style
			delay: anime.stagger(100) // 0.1 second delay of every character
		});
	};

	// Event listeners on the three different titles
	$('#title1').mouseout(function() {
		animationText('#title1');
	});
	$('#title2').mouseout(function() {
		animationText('#title2');
	});
	$('#title3').mouseout(function() {
		animationText('#title3');
	});
});
