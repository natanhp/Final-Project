$(document).ready(function () {
	fetch('https://api.jikan.moe/v3/top/anime/1/upcoming')
		.then(resnponse => { return resnponse.json(); })
		.then(data => {
			var JSONArray = data.top;
			console.log(JSONArray);

			var kontenSlider = '<div class="item active" style="background: url(' + JSONArray[0].image_url + ') no-repeat; background-size: cover; background-position: center;">' +
				'<img src="' + JSONArray[0].image_url + '"' +
				'alt="' + JSONArray[0].title + '">' +
				'<div class="carousel-caption">' +
				'<a href="'+JSONArray[0].url+'" target="_blank" style="color:white;">'+
				'<h3>' + JSONArray[0].title + '</h3></a>' +
				'<p>' + JSONArray[0].start_date + '</p>' +
				'</div>' +
				'</div>';

			console.log(kontenSlider);

			for (var i = 1; i < 5; i++) {
				console.log(JSONArray[i]);

				kontenSlider += '<div class="item" style="background: url(' + JSONArray[i].image_url + ') no-repeat; background-size: cover; background-position: center;">' +
					'<img src="' + JSONArray[i].image_url + '"' +
					'alt="' + JSONArray[i].title + '">' +
					'<div class="carousel-caption">' +
					'<a href="'+JSONArray[i].url+'" target="_blank" style="color:white;">'+
					'<h3>' + JSONArray[i].title + '</h3></a>' +
					'<p>' + JSONArray[i].start_date + '</p>' +
					'</div>' +
					'</div>';
			}
			$('.carousel-inner').html(kontenSlider);
		});
});