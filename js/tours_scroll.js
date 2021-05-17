function slowScroll(id) {
	var offset = 20;
	$('html, body').animate ({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
};