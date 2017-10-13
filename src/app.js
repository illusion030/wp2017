var info = true
$(document).ready( function() {
	$('.infobtn').click( function() {
		if (!info) {
			$('.info').animate({
			'width': '100%'
			}, 1000, function(){
			});
			info = true;
		}
	});
	$('.contactbtn').click( function() {
		if (info) {
			$('.info').animate({
			'width': '0px'
			}, 1000, function(){
			});
			info = false;
		}
	});
});