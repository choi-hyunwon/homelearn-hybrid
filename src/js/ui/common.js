$(function(){
	$(".studentList_find_by_teacher.mCustomScroll").mCustomScrollbar({
		theme: "dark",
		scrollbarPosition: "outside"
	});
	
	$(".mCustomScroll").mCustomScrollbar({
		theme: "dark"
	});
	
	$(".closeBox").click(function(){
		if ($(this).parents("#layers").length) {
			$("#layers").fadeOut(function(){
				$(this).remove();
			});
		}
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

//image 프리 로드
var imgArray = [
	"../img/common/icon_rightArrow.png",
	"../img/common/icon_leftArrow.png",
	"../img/common/icon_rightArrow_dim.png",
	"../img/common/icon_leftArrow_dim.png"
];

for(var i = 0; i < imgArray.length; i++) {
	var img = new Image();
	img.src = imgArray[i];
}

$.fn.scrollBox = function (prev, next) {
	var $scrollBox = $(this);
	var $prev = $(prev);
	var $next = $(next);

	$prev.add($next).on("click", function(){
		if ($(this).hasClass("dim")) return;
		$scrollBox.removeClass("scrollXMandatory");
		var scrollLeft = $scrollBox.scrollLeft();
		var w = $scrollBox.children().eq(1).outerWidth(true);
		if ($(this).is($prev)) {
			scrollLeft -= w;
		} else {
			scrollLeft += w;
		}
	
		$scrollBox.animate({
			scrollLeft: scrollLeft
		}, function(){
			var scrollLeftNow = $(this).scrollLeft();
			$(this).addClass("scrollXMandatory");	
			$(this).scrollLeft(scrollLeftNow);
			checkArrows();		
		});
	});

	$scrollBox.scrollEnd(function(){
		checkArrows();		
	});

	var checkArrows = function(){
		var scrollLeft = $scrollBox.scrollLeft();
		if (scrollLeft <= 0) {
			$prev.addClass("dim");
			$next.removeClass("dim");
		} else if ($scrollBox[0].scrollWidth <= $scrollBox[0].offsetWidth + scrollLeft) {
			$prev.removeClass("dim");
			$next.addClass("dim");
		} else {
			$prev.removeClass("dim");
			$next.removeClass("dim");
		}
	};
}