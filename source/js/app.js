$(document).ready(function(){
	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('menu-btn--active');
		$('.nav__wrapper').slideToggle();
	});

  $('.review__carousel').owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
		autoplay: true,
		autoplayTimeout: 10000,
		smartSpeed: 700,
    responsive: {
			0: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	})

	$('.home__slider').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop: true,
		nav: false,
		dots: true,
		// autoplay: true,
		margin: 20,
		autoplayTimeout: 10000,
		smartSpeed: 700,
		responsive: {
			0: {
				items: 1
			}
		}
	})

	$('.collections__carousel').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		dots: false,
		margin: 50,
		autoplayTimeout: 10000,
		smartSpeed: 700,
		responsive: {
			0: {
				items: 1
			},
			650: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$('.service__carousel').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		responsive: {
			0: {
				items: 1
			}
		}
	})

	$('.tab-control__link').on('click', function(e){
		e.preventDefault();

		let item = $(this).closest('.tab-control__item');
		let contentItem = $('.tab-content__item');
		let itemPos = item.index();
		contentItem.eq(itemPos)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	})
});