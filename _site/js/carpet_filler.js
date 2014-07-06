$(document).ready(function(){

	getRandomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

	getImageUrl = function(i) {
		return'url(../assets/carpets/carpet_' + i + '.jpg)'
	}

	toggleElementSize = function(element){
		element.each(function(i){
			var size = $(this).css('height');
			if (size === '100px')
				enlargeElement($(this));
			if (size === '800px')
				shrinkElement($(this));
		})
	};

	enlargeElement = function(element){
		$(element).animate({height:800});
	}

	shrinkElement = function(element){
		$(element).animate({height:100});
	}

	change_filler = function(){
		for (var i=1; i<13; i++){
			$('#filler_'+i).css({
			'height':'100px',
			'border': 'solid black 10px',
			'background-image': getImageUrl(i),
			'background-repeat':'no-repeat',
			'background-attachment':'fixed',
			'background-size':'cover',
			})
		}
	}

	$('.filler').on('click', function(e){
		var panels = $('.panel, .filler'); 
		e.preventDefault();
		toggleElementSize(panels);
	})


	change_filler()

})