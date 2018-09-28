// JavaScript Document

$(document).ready(function(){
	
	//Preloader
	$(window).on("load", function() { 
	preloaderFadeOutTime = 1000; 
	function hidePreloader() {
	var preloader = $('#spinner-wrapper').delay(2000).fadeOut('slow');
	preloader.fadeOut(preloaderFadeOutTime);	
	}
	hidePreloader();	
	});
	
	$(".global_nav_bar").click(function(){
		$(".global_nav_on").addClass("display_nav_block");
		$(".global_nav_bar").addClass("display_none");
		$(".display_nav_click_off").addClass("nav_click_off_show");
		$(".social_media_ul_dk").addClass("display_none");
		$(".daniel_kaus_social_media_span").addClass("display_none");
		
	});
	
	$(".display_nav_click_off").click(function(){
		$(".global_nav_on").removeClass("display_nav_block");
		$(".global_nav_bar").removeClass("display_none");
		$(".display_nav_click_off").removeClass("nav_click_off_show");
		$(".social_media_ul_dk").removeClass("display_none");
		$(".daniel_kaus_social_media_span").removeClass("display_none");
		
	});
	
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
	});
	
	$("a").click(function(){
		$(".social_media_ul_dk").addClass("display_none");
		$(".daniel_kaus_social_media_span").addClass("display_none");
	});
	
	$("a").click(function(){
		$(".social_media_ul_dk").removeClass("display_none");
		$(".daniel_kaus_social_media_span").removeClass("display_none");
	});
	
	$("a").click(function(){
		$(".global_nav_on").removeClass("display_nav_block");
		$(".global_nav_bar").removeClass("display_none");
		$(".display_nav_click_off").removeClass("nav_click_off_show");
		$("html, body").animate({
			scrollTop: $( $.attr(this, "href") ).offset().top
		}, 800);
		return false;
	});
	
});