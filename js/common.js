$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

  
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header').outerHeight();

  $(window).on('scroll', function() {
	  window.requestAnimationFrame(checkScroll);
  });

  function checkScroll() {
	  var st = $(window).scrollTop();

	  if (Math.abs(lastScrollTop - st) <= delta)
		  return;

	  if (st > lastScrollTop && st > navbarHeight) {
		  // Scroll Down
		  $('.header').removeClass('nav-down').addClass('nav-up');
		  $(".menu-dropdown").slideUp(200);
		  $(".sandwich").removeClass("active");
	  } else {
		  // Scroll Up
		  $('.header').removeClass('nav-up').addClass('nav-down');
	  }

	  lastScrollTop = st; 
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".sandwich").click(function() {
		if ($(".header__bottom").is(":hidden")) {
			$(".header__bottom").slideDown(200);
			$(".sandwich").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
			$(".header").addClass("active");
		} else {
			$(".header__bottom").slideUp(200);
			$(".sandwich").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
			$(".header").removeClass("active");
		}
	});

	$(".menu-overlay").click(function() {
		$(".header__bottom").slideUp(200);
		$(".sandwich").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
		$(".header").removeClass("active");
	});

	//слайдер

	$('.slider-clients').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 1.73205C21.3812 1.37479 20.6188 1.37479 20 1.73205L4.81347 10.5C4.19467 10.8573 3.81347 11.5175 3.81347 12.2321V29.768C3.81347 30.4825 4.19467 31.1427 4.81347 31.5L20 40.268C20.6188 40.6252 21.3812 40.6252 22 40.2679L37.1865 31.5C37.8053 31.1427 38.1865 30.4825 38.1865 29.768V12.232C38.1865 11.5175 37.8053 10.8573 37.1865 10.5L22 1.73205Z" stroke="#FB7B34" stroke-width="2"/><path d="M23.3334 16.3335L18.6667 21.0002L23.3334 25.6668" stroke="#FB7B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.73205C20.6188 1.37479 21.3812 1.37479 22 1.73205L37.1865 10.5C37.8053 10.8573 38.1865 11.5175 38.1865 12.2321V29.768C38.1865 30.4825 37.8053 31.1427 37.1865 31.5L22 40.268C21.3812 40.6252 20.6188 40.6252 20 40.2679L4.81347 31.5C4.19466 31.1427 3.81347 30.4825 3.81347 29.768V12.232C3.81347 11.5175 4.19466 10.8573 4.81347 10.5L20 1.73205Z" stroke="#FB7B34" stroke-width="2"/><path d="M18.6667 16.3335L23.3334 21.0002L18.6667 25.6668" stroke="#FB7B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
				}
			}
			]
		});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('.item-form select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

