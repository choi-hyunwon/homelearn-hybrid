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

	
	if ($(".bannerSection").length) {
		$(".bannerSection > div").scrollEnd(function ($this) {
			var $dots = $this.siblings(".bannerIndicator");
			var scrollLeft = $this[0].scrollLeft;
			var itemWidth = $this.children().eq(0).width();
			var index = Math.round(scrollLeft / itemWidth);
			$dots.children().eq(index).addClass("on").siblings().removeClass("on");
		});

		setInterval(function(){
			$(".bannerSection div").nextSlide();
		}, 3000);
	}

	$("body").on("click", "[data-href]", function(){
		var href = $(this).attr("data-href");
		if (!href) return;
		href = href.split(",").map(function(item){ return item.trim();});
		if (href.length > 1) {
			window.open(href[0], href[1]);
		} else {
			location.href = href[0];
		}
	});

	$(".customSelect").click(function(){
		if ($(this).hasClass("disabled")) return;
		$(this).toggleClass("down");
	});

	$(".customSelect li").click(function(){
		var $input = $(this).parent("ul").siblings("input[type='hidden']");
		var value = $(this).attr("data-value");
		$input.val(value);
		$(this).parent("ul").removeClass("down");
		var text = $(this).text();
		$(this).parent("ul").prev("span").text(text);
		console.log(value);
	});
});

$.fn.prevSlide = function(){
	var w = $(this).children().first().outerWidth(true);
	var $scrollBox = $(this);
	var scrollLeft = $(this).scrollLeft() - w;
	var scrollSnap = false;
	if ($(this).hasClass("scrollXMandatory")) {
		$(this).removeClass("scrollXMandatory");
		scrollSnap = true;
	}
	$(this).animate({
		scrollLeft : scrollLeft
	}, function(){
		if (scrollSnap) $scrollBox.addClass("scrollXMandatory");
	});
};

$.fn.nextSlide = function(){
	var w = $(this).children().first().outerWidth(true);
	var $scrollBox = $(this);
	var scrollLeft = $(this).scrollLeft() + w;
	var scrollSnap = false;
	if ($scrollBox[0].scrollWidth <= scrollLeft) scrollLeft = 0;
	if ($(this).hasClass("scrollXMandatory")) {
		$(this).removeClass("scrollXMandatory");
		scrollSnap = true;
	}
	// console.log($scrollBox[0].scrollWidth, scrollLeft);
	$(this).animate({
		scrollLeft : scrollLeft
	}, function(){
		if (scrollSnap) $scrollBox.addClass("scrollXMandatory");
	});
};

// scroll end 이벤트 바인딩
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