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

	$('.service__carousel').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop: true,
		nav: true,
		dots: false,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 10000,
		smartSpeed: 700,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnJldmlld19fY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIG1hcmdpbjogMTAsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5VGltZW91dDogMTAwMDAsXHJcblx0XHRzbWFydFNwZWVkOiA3MDAsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMDAwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblx0JCgnLmNvbGxlY3Rpb25zX19jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRuYXY6IHRydWUsXHJcblx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0bWFyZ2luOiAxNSxcclxuXHRcdGF1dG9wbGF5VGltZW91dDogMTAwMDAsXHJcblx0XHRzbWFydFNwZWVkOiA3MDAsXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ2NTA6IHtcclxuXHRcdFx0XHRpdGVtczogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMDAwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDNcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy5zZXJ2aWNlX19jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuXHRcdGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuXHRcdGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0bmF2OiB0cnVlLFxyXG5cdFx0ZG90czogZmFsc2UsXHJcblx0XHRtYXJnaW46IDEwLFxyXG5cdFx0YXV0b3BsYXk6IHRydWUsXHJcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDEwMDAwLFxyXG5cdFx0c21hcnRTcGVlZDogNzAwLFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDFcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy50YWItY29udHJvbF9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGxldCBpdGVtID0gJCh0aGlzKS5jbG9zZXN0KCcudGFiLWNvbnRyb2xfX2l0ZW0nKTtcclxuXHRcdGxldCBjb250ZW50SXRlbSA9ICQoJy50YWItY29udGVudF9faXRlbScpO1xyXG5cdFx0bGV0IGl0ZW1Qb3MgPSBpdGVtLmluZGV4KCk7XHJcblx0XHRjb250ZW50SXRlbS5lcShpdGVtUG9zKVxyXG5cdFx0XHQuYWRkKGl0ZW0pXHJcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0LnNpYmxpbmdzKClcclxuXHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KVxyXG59KTsiXX0=
