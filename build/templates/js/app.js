$(document).ready(function(){
	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('menu-btn--active');
		$('.nav__wrapper').slideToggle();
	});

	$('.search__link').on('click', function(e){
		e.preventDefault();
		$('.popup--search').fadeIn();
	});

	$('.popup__close').on('click', function(e){
		e.preventDefault();
		$('.popup').fadeOut();
	});

	$('.login__link').on('click', function(e){
		e.preventDefault();
		$('.popup--login').fadeIn();
	})

  $('.review__carousel').owlCarousel({
    loop: true,
    dots: true,
    margin: 16,
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
		autoplay: true,
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
		margin: 65,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LWJ0bi0tYWN0aXZlJyk7XHJcblx0XHQkKCcubmF2X193cmFwcGVyJykuc2xpZGVUb2dnbGUoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNlYXJjaF9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLnBvcHVwLS1zZWFyY2gnKS5mYWRlSW4oKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnBvcHVwX19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnLnBvcHVwJykuZmFkZU91dCgpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcubG9naW5fX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJy5wb3B1cC0tbG9naW4nKS5mYWRlSW4oKTtcclxuXHR9KVxyXG5cclxuICAkKCcucmV2aWV3X19jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAxNixcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuXHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdDEwMDA6IHtcclxuXHRcdFx0XHRpdGVtczogMlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0JCgnLmhvbWVfX3NsaWRlcicpLm93bENhcm91c2VsKHtcclxuXHRcdGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuXHRcdGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0bmF2OiBmYWxzZSxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdG1hcmdpbjogMjAsXHJcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDEwMDAwLFxyXG5cdFx0c21hcnRTcGVlZDogNzAwLFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDFcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy5jb2xsZWN0aW9uc19fY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0bmF2OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXk6IHRydWUsXHJcblx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdG1hcmdpbjogNjUsXHJcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDEwMDAwLFxyXG5cdFx0c21hcnRTcGVlZDogNzAwLFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0NjUwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0MTAwMDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAzXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQkKCcuc2VydmljZV9fY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcblx0XHRhbmltYXRlSW46ICdmYWRlSW4nLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdG5hdjogdHJ1ZSxcclxuXHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0bWFyZ2luOiAxMCxcclxuXHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQkKCcudGFiLWNvbnRyb2xfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYi1jb250cm9sX19pdGVtJyk7XHJcblx0XHRsZXQgY29udGVudEl0ZW0gPSAkKCcudGFiLWNvbnRlbnRfX2l0ZW0nKTtcclxuXHRcdGxldCBpdGVtUG9zID0gaXRlbS5pbmRleCgpO1xyXG5cdFx0Y29udGVudEl0ZW0uZXEoaXRlbVBvcylcclxuXHRcdFx0LmFkZChpdGVtKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdC5zaWJsaW5ncygpXHJcblx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSlcclxufSk7Il19
