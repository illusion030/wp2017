var info = true
var contact = false
var game = false
function escapeHtml(data) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return data.replace(/[&<>"']/g, function(m) { return map[m]; })
}

$(document).ready( function() {
	$('.infobtn').click( function() {
		if (contact) { 
			$('.info').transition('slide right');
			$('.contact').transition('slide left');
      contact = false;
      info = true;
    } else if (game) {
			$('.info').transition('slide left');
			$('.game').transition('slide right');
			game = false;
      info = true;
		}
		
	});
	$('.contactbtn').click( function() {
		if (info) {
			$('.info').transition('slide right');
			$('.contact').transition('slide left');
			info = false;
      contact = true;
		} else if (game) {
			$('.game').transition('slide right');
			$('.contact').transition('slide left');
			game = false;
      contact = true;
    }
	});
  $('.alert').click( function() {
    
		if (info) {
			$('.game').transition('slide left');
			$('.info').transition('slide right');
			info = false;
      game = true;
		} else if (contact) {
			$('.game').transition('slide right');
			$('.contact').transition('slide left');
			contact = false;
      game = true;
    }

    $('.game').html('wait...');

    var name;
    name = escapeHtml($('.inputText').val());
    $.ajax({
    url: 'src/ajax.php',
    cache: false,
    type: 'POST',
    data: { data: name},
    error: function(xhr) {
      alert('Ajax request error');
    },
    success: function(res) {
      $('.game').html(res);
    }
    
    });
  });
});
