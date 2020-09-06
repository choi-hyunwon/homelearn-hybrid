$(function(){
	$(".scrollBox").mCustomScrollbar({
		theme: "dark"
	});

	$(".bannerSection > div").scrollEnd(function ($this) {
		var $dots = $this.siblings(".bannerIndicator");
		var scrollLeft = $this[0].scrollLeft;
		var itemWidth = $this.children().eq(0).width();
		var index = Math.round(scrollLeft / itemWidth);
		$dots.children().eq(index).addClass("on").siblings().removeClass("on");
	});
});

$.fn.scrollEnd = function (callback, timeout) {
	timeout = timeout || 200;
	$(this).scroll(function () {
		var $this = $(this);
		if ($this.data('scrollTimeout')) {
			clearTimeout($this.data('scrollTimeout'));
		}
		$this.data('scrollTimeout', setTimeout(function () {
			callback($this);
		}, timeout));
	});
};