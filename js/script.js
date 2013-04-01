/// <reference path="http://code.jquery.com/jquery-1.9.1.min.js" />
/// 
$(function () {
	var $anchors = $("a", "ul");
	var $scroller = $("div.slider");
	$anchors.click(function () {
		var anchor = $(this);
		if (anchor.hasClass("register-button"))
			return true;

		if (anchor.hasClass("active"))
			return false;

		$anchors.removeClass("active");
		anchor.addClass("active");
		var index = $anchors.index(anchor);

		$scroller.animate({
			left: -704 * index
		}, 500);

		return false;
	});
});