//------------------- Style Navigation type 07 ------------
//#region Navigation Xử lý khi scroll
"use strict";

$(document).ready(function () {
	var oJect = $("#nb_navigation_type_07");
	var affixPad = $("#nb_affixPad");
	var nbTopNav = oJect.children(".nb-top-nav");
	var nbNavMain = oJect.children(".nb-main-navbar");
	var heightNavMain = nbNavMain.outerHeight();
	var heightCrrent = $(window).scrollTop();
	var offsetTop = nbNavMain.offset().top;

	//Kiểm tra khi load trang
	if (heightCrrent >= offsetTop) {
		oJect.addClass("nb-nav-fix");
		affixPad.css("padding-top", heightNavMain);
	} else {
		oJect.removeClass("nb-nav-fix");
		affixPad.css("padding-top", "0");
	}
	//Kiểm tra khi scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() >= offsetTop) {
			oJect.addClass("nb-nav-fix");
			affixPad.css("padding-top", heightNavMain);
		} else {
			oJect.removeClass("nb-nav-fix");
			affixPad.css("padding-top", "0");
		}
	});
});
// Xứ lý khi click vào icon-menu
$(document).ready(function () {
	//gán các phần tử cần thiết
	var oJect = $("#nb_navigation_type_07");
	var nbToggle = oJect.find(".nb_tablertAction");
	var nbToggleShowToa = oJect.find(".nb-navbar-collapse");
	var nbToggleShowTob = nbToggleShowToa.find(".item");

	//Sự kiện click vào link item thì để active
	nbToggleShowTob.on("click", function (e) {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			nbToggleShowTob.removeClass("active");
			$(this).addClass("active");
		}

		e.stopPropagation();
	});

	//Sự kiện click vào icon show tablert
	nbToggle.on('click', function (e) {
		e.preventDefault();
		var tablertAction = $(this);

		if (tablertAction.hasClass('active')) {
			tablertAction.removeClass('active');
			nbToggleShowToa.removeClass('open');
			nbToggleShowTob.removeClass("active");
			$('body').removeClass("tablertShow");
		} else {
			tablertAction.addClass('active');
			nbToggleShowToa.addClass('open');
			$('body').addClass("tablertShow");
		}

		e.stopPropagation();
	});

	$(document).click(function () {
		var windowWidth = $(window).outerWidth();

		if (windowWidth < 1025) {
			nbToggle.removeClass('active');
			nbToggleShowToa.removeClass('open');
			nbToggleShowTob.removeClass("active");
			$('body').removeClass("tablertShow");
		}
	});
});
//#endregion

//#region Banner
$(document).ready(function () {
	//đối tượng thao tác
	var obJect = $("#nb-carousel-evolution");
	var ojTo = obJect.children(".nb-slides");
	var ojToChil = ojTo.children(".nb-slideItem");
	var currentSTTActive = "";
	var nextOne = "";
	var prevOne = "";
	var CurrentActive = "";
	var nextOneCurrentActive = "";
	var prevOneCurrentActive = "";

	//Đối tượng click
	var nextAction = obJect.find(".arr-next");
	var prevAction = obJect.find(".arr-prev");

	// Gán các biết stt, lengh.
	var stt = 0;
	var lenghItem = ojToChil.length;

	//Gán phần tử đầu tiên active
	ojTo.children(".nb-slideItem").first().addClass("active");

	//Duyệt qua các phần tử và gán stt
	ojToChil.each(function () {
		var crrentItem = $(this);
		$(this).attr("stt", stt);
		stt++;
	});
	//Duyệt qua các phần từ và lấy về phần tử đang active
	duyetItem();
	resertVitri();
	function duyetItem() {
		ojToChil.each(function () {
			var crrentItem = $(this);
			if (crrentItem.hasClass("active")) {
				currentSTTActive = parseInt(crrentItem.attr("stt"));
				nextOne = currentSTTActive + 1;
				prevOne = currentSTTActive - 1;

				if (currentSTTActive == 0) {
					prevOne = lenghItem - 1;
				} else if (currentSTTActive == lenghItem - 1) {
					nextOne = 0;
				}
			}
			stt++;
		});
	}

	//Lấy về số thứ tự của phần tử đang trước và sau phần tử đang active	
	function resertVitri() {
		CurrentActive = $("[stt=" + currentSTTActive + "]");
		nextOneCurrentActive = $("[stt=" + nextOne + "]");
		prevOneCurrentActive = $("[stt=" + prevOne + "]");

		nextOneCurrentActive.addClass("next");
		prevOneCurrentActive.addClass("prev");
	}

	//Sự kiện click
	nextAction.on("click", function (e) {
		e.preventDefault();
		ojToChil.removeClass("active");
		ojToChil.removeClass("next");
		ojToChil.removeClass("prev");
		nextOneCurrentActive.addClass("active");
		duyetItem();
		resertVitri();
	});
	prevAction.on("click", function (e) {
		e.preventDefault();
		ojToChil.removeClass("active");
		ojToChil.removeClass("next");
		ojToChil.removeClass("prev");
		prevOneCurrentActive.addClass("active");
		duyetItem();
		resertVitri();
	});
});
//#endregion

//$(document).ready(function () {
//	var ob = $("#nb-carousel-evolution");
//	var slide = ob.find(".nb-slides");
//	var prev = ob.find(".arr-prev");
//	var next = ob.find(".arr-next");
//	var item = slide.children(".nb-slideItem");
//	var stt = 0;
//	var leng = item.length;
//	slide.children(".nb-slideItem").each(function () {
//		stt++;
//		if (stt == 2) {
//			$(this).addClass("active");
//		}
//		$(this).attr("stt", stt);
//	});
//	resetVitri(1, leng);
//	next.on("click", function (e) {
//		e.preventDefault();
//		var sttCr = slide.children(".nb-slideItem.active").attr("stt");
//		if (sttCr >= leng) {
//			sttCr = 0;
//		}
//		if (sttCr == leng-1) {
//			item.eq(0).css({
//				"z-index": "3",
//				"top": "50%",
//				"bottom": "auto",
//				"left": "auto",
//				"right": "0",
//				"width": "50%",
//				"height": "80%",
//			});
//		}
//		item.eq(parseInt(sttCr) - 1).removeClass("active").css({
//			"z-index": "3",
//			"top": "50%",
//			"bottom": "auto",
//			"left": "0",
//			"right": "auto",
//			"width": "50%",
//			"height": "80%",
//		});
//		item.eq(parseInt(sttCr)).addClass("active").css({
//			"z-index": "5",
//			"top": "auto",
//			"bottom": "0",
//			"left": "15%",
//			"right": "15%",
//			"width": "70%",
//			"height": "100%",
//		});
//		item.eq(parseInt(sttCr)+1).css({
//			"z-index": "3",
//			"top": "50%",
//			"bottom": "auto",
//			"left": "auto",
//			"right": "0",
//			"width": "50%",
//			"height": "80%",
//		});
//	});
//	prev.on("click", function (e) {
//		e.preventDefault();
//		var sttCr = slide.children(".nb-slideItem.active").attr("stt");
//		if (sttCr <= 1) {
//			sttCr = leng;
//		}
//		if (sttCr == 2) {
//			item.eq(leng).css({
//				"z-index": "3",
//				"top": "50%",
//				"bottom": "auto",
//				"left": "0",
//				"right": "auto",
//				"width": "50%",
//				"height": "80%",
//			});
//		}
//		item.eq(parseInt(sttCr) - 1).addClass("active").css({
//			"z-index": "3",
//			"top": "50%",
//			"bottom": "auto",
//			"left": "0",
//			"right": "auto",
//			"width": "50%",
//			"height": "80%",
//		});
//		item.eq(parseInt(sttCr) - 2).removeClass("active").css({
//			"z-index": "5",
//			"top": "auto",
//			"bottom": "0",
//			"left": "15%",
//			"right": "15%",
//			"width": "70%",
//			"height": "100%",
//		});
//		item.eq(parseInt(sttCr)).removeClass("active").css({
//			"z-index": "3",
//			"top": "50%",
//			"bottom": "auto",
//			"left": "auto",
//			"right": "0",
//			"width": "50%",
//			"height": "80%",
//		});
//	});
//	function resetVitri(i) {
//		item.eq(i).css({
//			"z-index": "5",
//			"top": "auto",
//			"bottom": "0",
//			"left": "15%",
//			"right": "15%",
//			"width": "70%",
//			"height": "100%",
//		});
//		item.eq(i).prev().css({
//			"z-index": "3",
//			"top": "50%",
//			"bottom": "auto",
//			"left": "0",
//			"right": "auto",
//			"width": "50%",
//			"height": "80%",
//		});
//		item.eq(i).next().css({
//			"z-index": "3",
//			"top": "50%",
//			"bottom": "auto",
//			"left": "auto",
//			"right": "0",
//			"width": "50%",
//			"height": "80%",
//		});
//	}
//});

// #region Khởi tạo slick slider chung, option lấy theo thuộc tính data-slick
$('.slick-slider').slick();
// #endregion

//#region Scroll to top
$(document).ready(function () {
	var obJect = $('#nb-scrollTop');
	var windownScroll = $(window).scrollTop();

	// Kiểm tra nếu hiện tại scroll ở vị trí nào
	if (windownScroll > 100) {
		obJect.addClass('show');
	} else {
		obJect.removeClass('show');
	}
	// Nếu cuộn chuột
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			obJect.addClass('show');
		} else {
			obJect.removeClass('show');
		}
	});
	//Click event to scroll to top
	obJect.click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
//#endregion

//#region nbLibrary Product detail
$(".nb_library").each(function () {
	var $this = $(this);
	//Xử lý khi click vào nav img
	$(".tabs .tab", $this).click(function (e) {
		e.preventDefault();

		var dataTab = $(this).attr("data-tab");

		$(".tabs .tab", $this).removeClass("active");
		$(".tabs-content .tab-content", $this).removeClass("active");
		$(".tabs .tab[data-tab='" + dataTab + "']", $this).addClass("active");
		$(".tabs-content .tab-content[data-tab='" + dataTab + "']", $this).addClass("active");

		//Hủy slick và gọi lại slick cho các khối có .slick-slider trong tab, thuộc tính lấy từ data-slick
		$(".tabs-content .tab-content[data-tab='" + dataTab + "'] .slick-slider", $this).slick("unslick").slick();;
	});
});
//#endregion

//Input count
$(document).ready(function () {
	var obJect = $(".nb_input_count");
	var actionLinkTru = obJect.children(".action.acTru");
	var actionLinkCong = obJect.children(".action.acCong");

	var bien = 0;

	actionLinkTru.on("click", function (e) {
		e.preventDefault();

		var objectCurrent = $(this).parents();
		var inputForm = objectCurrent.children(".form-control");

		var soluongCurent = inputForm.attr("value");

		if (soluongCurent <= 0) {
			inputForm.attr("value", "0");
			inputForm.attr("value", "0");
		} else {
			soluongCurent--;
			inputForm.attr("value", soluongCurent);
			inputForm.attr("value", soluongCurent);
		}
	});
	actionLinkCong.on("click", function (e) {
		var objectCurrent = $(this).parents();
		var inputForm = objectCurrent.children(".form-control");
		e.preventDefault();

		var soluongCurent = inputForm.attr("value");

		if (soluongCurent >= 200) {
			inputForm.attr("value", "200");
			inputForm.attr("value", "200");
		} else {
			soluongCurent++;
			inputForm.attr("value", soluongCurent);
			inputForm.attr("value", soluongCurent);
		}
	});
});

//#region --- Origent Toolbar
$(document).ready(function () {
	$(function () {
		$(".post-size .large").click(function (e) {
			e.preventDefault();
			$(".post-content").each(function () {
				var size = parseInt($(this).css("font-size"));
				var lineheight = parseInt($(this).css("line-height"));
				size = size + 1 + "px";
				lineheight = lineheight + 2 + "px";
				$(this).css({
					'font-size': size,
					'line-height': lineheight
				});
				$(this).find("*").css({
					'font-size': size,
					'line-height': lineheight
				});
			});
		});
		$(".post-size .small").click(function (e) {
			e.preventDefault();
			$(".post-content").each(function () {
				var size = parseInt($(this).css("font-size"));
				var lineheight = parseInt($(this).css("line-height"));
				size = size - 1 + "px";
				lineheight = lineheight - 2 + "px";
				$(this).css({
					'font-size': size,
					'line-height': lineheight
				});
				$(this).find("*").css({
					'font-size': size,
					'line-height': lineheight
				});
			});
		});
		$(".post-size .normal").click(function (e) {
			e.preventDefault();
			$(".post-content").each(function () {
				var size = parseInt($(this).css("font-size"));
				var lineheight = parseInt($(this).css("line-height"));
				size = 15 + "px";
				lineheight = 24 + "px";
				$(this).css({
					'font-size': size,
					'line-height': lineheight
				});
				$(this).find("*").css({
					'font-size': size,
					'line-height': lineheight
				});
			});
		});
	});
	(function (d, s, id) {
		var js,
		    fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.11&appId=453642988336652';
		fjs.parentNode.insertBefore(js, fjs);
	})(document, 'script', 'facebook-jssdk');
	(function () {
		var po = document.createElement("script");
		po.type = "text/javascript";
		po.async = true;
		po.src = "https://apis.google.com/js/platform.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(po, s);
	})();
});
//#endregion --- end

//#region nb_tabCollapse
$(document).ready(function () {
	var objectTab = $(".nb_tabCollapse");
	var obNav = objectTab.children(".nav-tabs");
	var obContent = objectTab.children(".tab-content");
	var currentActive = "";

	obNav.children(".navItem").each(function () {
		if ($(this).hasClass("active")) {
			currentActive = $(this).attr("data-tab");
		} else {}
	});

	setOpen();
	obNav.children(".navItem").on("click", function (e) {
		currentActive = $(this).attr("data-tab");
		e.preventDefault();
		if ($(this).hasClass("active")) {
			obNav.children(".navItem").removeClass("active");
			obContent.children(".nbTabPane").removeClass("open");
		} else {
			obNav.children(".navItem").removeClass("active");
			obContent.children(".nbTabPane").removeClass("open");
			$(this).addClass("active");
			setOpen();
		}
	});

	function setOpen() {
		obContent.children(".nbTabPane").each(function () {
			if ($(this).attr("id") == currentActive) {
				$(this).addClass("open");
			} else {}
		});
	}
});
//#endregion

//Xử lý với form search khi vào mobi
$(document).ready(function () {
	var widthObject = $(window).outerWidth();
	if (widthObject < 700) {
		var ob = $(".blogSearch");
		//ob.children("#frmSearch").append("<a class='iconClose'>x</a>");
		ob.children(".form-search").on("click", function (e) {
			$(this).parent().addClass("showInput");
			$("body").addClass("tablertShow");
			e.stopPropagation();
		});
		$(document).on("click", function () {
			$(".blogSearch").removeClass("showInput");
			$("body").removeClass("tablertShow");
		});
	}
});

