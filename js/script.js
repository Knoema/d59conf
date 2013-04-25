/// <reference path="http://code.jquery.com/jquery-1.9.1.min.js" />
/// 
$(function () {
	var $anchors = $("a", "ul");
	var $scroller = $("div.slider");

	$(window).on("hashchange", function (e) {
		var hash = window.location.hash;
		if (hash.indexOf("#") === -1)
			hash = "#about";

		if ($("article#bla-" + hash.split("#")[1]).length === 1) {
			animate($("a[href='" + hash + "']", "ul"));
		}
	});

	function animate($anchor) {
		if ($anchor.hasClass("active"))
			return false;

		$anchors.removeClass("active");
		$anchor.addClass("active");

		var index = $anchors.index($anchor);
		$scroller.animate({	left: -700 * index }, 500);
	}

	$("nav").on("click", "ul li a", function() {
		var anchor = $(this);
		if (anchor.hasClass("register-button"))
			return true;

		return animate(anchor);
	});

	$("article#bla-agenda").on("click", "table a", function () {
		$(this).closest("tr").next().find("p").slideToggle(300);
		return false;
	});

	$(window).trigger("hashchange");
});