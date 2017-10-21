var info = true
$(document).ready( function() {
	$('.infobtn').click( function() {
		if (!info) {
			$('.info').transition('slide right');
			$('.contact').transition('slide left');
			info = true;
		}
		
	});
	$('.contactbtn').click( function() {
		if (info) {
			$('.info').transition('slide right');
			$('.contact').transition('slide left');
			info = false;
		}
	});
});