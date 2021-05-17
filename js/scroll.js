function slowScroll(id) {
	var offset = 20;
	$('html, body').animate ({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
};

$(document).ready(function() {
	$(".down_button").click(function() {
		$('#tours').fadeTo(1000, 1)
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1000) {
			$('#about_us').fadeIn(1000)
		} else {
			$('#about_us').fadeOut(700)
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1500) {
			$('#team').fadeIn(1000)
		} else {
			$('#team').fadeOut(700)
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 2100) {
			$('#request_first').fadeIn(1000)
		} else {
			$('#request_first').fadeOut(1000)
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 2500) {
			$('#review').fadeIn(1000)
		} else {
			$('#review').fadeOut(700)
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 3000) {
			$('#qa').fadeIn(1000)
		} else {
			$('#qa').fadeOut(700)
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 3300) {
			$('#request_second').fadeIn(1000)
			$('#contacts').fadeIn(1000)
		} else {
			$('#request_second').fadeOut(700);
			$('#contacts').fadeOut(700)
		}
	});
});