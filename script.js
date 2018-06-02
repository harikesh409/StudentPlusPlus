$(document).ready(function() {
	let i = 0;	
	$.getJSON('data.json', function(json, textStatus) {
		$.each(json,function(key,value) {
			// console.log(value.isContributor);
			// console.log(i);
			let contributor = value.isContributor ? " - Contributor" : "";
			$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
			i = i + 1;
			$(".carousel-inner").append(`<div class="item carousel-item">
				<div class="img-box"><img src="http://via.placeholder.com/150x150" alt=""></div>
				<p class="testimonial">${value.message}</p>
				<p class="overview"><b>${key}</b>${contributor}</p>
				</div>`);
		});
		$("div .carousel-inner>div:first").addClass('active');

		$(".carousel-inner").append(`<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
			<i class="fa fa-angle-left"></i>
			</a>
			<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
			<i class="fa fa-angle-right"></i>
			</a>`);
	});
	$('.mixed').flashy();
	
});