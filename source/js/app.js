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
});