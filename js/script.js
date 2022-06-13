

const reviewsSwiper = document.querySelector('.swiper-rewiews');

console.log(reviewsSwiper)

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-rewiews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}