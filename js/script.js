!function() {

	// Caption
	$('.fa-entry img').each(function(i, img){
		img = $(img);
		if (!img.data('caption')) {
			img.data('caption', true);
			var alt = img.attr('alt');
			if (alt) {
				img.after('<span class="caption">' + alt + '</span>');	
			}
		}
	});

	// times
	$('time').each(function(index, timeEL) {
		timeEL = $(timeEL);
		var time = moment(timeEL.attr('datetime'));
		timeEL.text(time.fromNow());
	})
}();