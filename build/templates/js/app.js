$(document).ready(function(){
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
	$('.collections__carousel').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		dots: false,
		margin: 15,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAkKCcucmV2aWV3X19jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuXHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdDEwMDA6IHtcclxuXHRcdFx0XHRpdGVtczogMlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHQkKCcuY29sbGVjdGlvbnNfX2Nhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdG5hdjogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0ZG90czogZmFsc2UsXHJcblx0XHRtYXJnaW46IDE1LFxyXG5cdFx0YXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuXHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuXHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdDY1MDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdDEwMDA6IHtcclxuXHRcdFx0XHRpdGVtczogM1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0JCgnLnRhYi1jb250cm9sX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IGl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy50YWItY29udHJvbF9faXRlbScpO1xyXG5cdFx0bGV0IGNvbnRlbnRJdGVtID0gJCgnLnRhYi1jb250ZW50X19pdGVtJyk7XHJcblx0XHRsZXQgaXRlbVBvcyA9IGl0ZW0uaW5kZXgoKTtcclxuXHRcdGNvbnRlbnRJdGVtLmVxKGl0ZW1Qb3MpXHJcblx0XHRcdC5hZGQoaXRlbSlcclxuXHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHQuc2libGluZ3MoKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0pXHJcbn0pOyJdfQ==
