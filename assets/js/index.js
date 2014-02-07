/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */

var links = [];

(function ($) {
	"use strict";
	
	function init() {
		$.scrollUp({
			scrollDistance: 200,
			scrollFrom: 'top',
			scrollSpeed: 250,
			easingType: 'linear',
			animation: 'fade',
			scrollText: '<span class="icon-arrow-up"></span>',
			scrollTitle: 'To top',
			scrollImg: false,
			zIndex: 200
		});
		
		$('.site-head-content').removeClass('unactive');
	}
	
	$(document).ready(function(){
		FastClick.attach(document.body);
		init();
	});
	
}(jQuery));