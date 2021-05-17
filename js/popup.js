$(document).ready(function() {
	$("setCookie").click(function() {
		var time = new Time ();
		time.setTime(time.getTime() + (60 * 2000));
		$.cookie("popup", "", {expires: time, path: '/'});
		$("#bg_popup").hide();
	});
	if ($.cookie("popup") == null) {
		setTimeout(function() {
			$("#bg_popup").show();
			console.log('hi')
		}, 30000)
	} else {
		$("#bg_popup").hide();
	}
});


$("#phone_popup_button").on("click", function() {
  $("#bg__phone_popup").toggle();
});