/// <reference path="http://code.jquery.com/jquery-1.9.1.min.js" />
/// 
$(function () {
	var $anchors = $("a", "ul");
	var $scroller = $("div.slider");

	var hash = window.location.hash;
	if ($("article" + hash).length === 1) {
		animate($("a[href='" + hash + "']", "ul"));
	}

	$(window).on("hashchange", function (e) {
		return false;
	});

	function restore(hash) {
		$("article[id='']").attr("id", hash.split("#")[1]);
	}

	function animate($anchor) {
		$anchors.removeClass("active");
		$anchor.addClass("active");
		var hash = $anchor[0].hash;
		$("article" + hash).attr("id", "");

		var index = $anchors.index($anchor);

		$scroller.animate({
			left: -704 * index
		}, 500, function () {
			restore(hash);
		});
	}

	$("nav").on("click", "ul li a", function() {
		var anchor = $(this);
		if (anchor.hasClass("register-button"))
			return true;

		if (anchor.hasClass("active"))
			return false;

		animate(anchor);
	});
});