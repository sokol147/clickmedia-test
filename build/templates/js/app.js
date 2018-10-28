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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnLm1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51LWJ0bi0tYWN0aXZlJyk7XHJcblx0XHQkKCcubmF2X193cmFwcGVyJykuc2xpZGVUb2dnbGUoKTtcclxuXHR9KTtcclxuXHJcbiAgJCgnLnJldmlld19fY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1hcmdpbjogMTAsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5VGltZW91dDogMTAwMDAsXHJcblx0XHRzbWFydFNwZWVkOiA3MDAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMDAwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy5ob21lX19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcblx0XHRhbmltYXRlSW46ICdmYWRlSW4nLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdG5hdjogZmFsc2UsXHJcblx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0Ly8gYXV0b3BsYXk6IHRydWUsXHJcblx0XHRtYXJnaW46IDIwLFxyXG5cdFx0YXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuXHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuXHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQkKCcuY29sbGVjdGlvbnNfX2Nhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdG5hdjogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0ZG90czogZmFsc2UsXHJcblx0XHRtYXJnaW46IDUwLFxyXG5cdFx0YXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuXHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuXHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdDY1MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdDEwMDA6IHtcclxuXHRcdFx0XHRpdGVtczogM1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0JCgnLnNlcnZpY2VfX2Nhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0YW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxyXG5cdFx0YW5pbWF0ZUluOiAnZmFkZUluJyxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRuYXY6IHRydWUsXHJcblx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdG1hcmdpbjogMTAsXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczogMVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0JCgnLnRhYi1jb250cm9sX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IGl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy50YWItY29udHJvbF9faXRlbScpO1xyXG5cdFx0bGV0IGNvbnRlbnRJdGVtID0gJCgnLnRhYi1jb250ZW50X19pdGVtJyk7XHJcblx0XHRsZXQgaXRlbVBvcyA9IGl0ZW0uaW5kZXgoKTtcclxuXHRcdGNvbnRlbnRJdGVtLmVxKGl0ZW1Qb3MpXHJcblx0XHRcdC5hZGQoaXRlbSlcclxuXHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQuc2libGluZ3MoKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0pXHJcbn0pOyJdfQ==
