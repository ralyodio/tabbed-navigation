/*!
 * jQuery.tabbed() v1.0.1
 * https://github.com/chovy/tabbed-navigation 
 *
 * Copyright 2012, Anthony Ettinger
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Tue Feb 14 19:48:04 PST 2012
 */
(function($){
	$.fn.extend({ 
		tabbed: function( opts ) {

			//default options
			var opts = $.extend({
			}, opts);

			return this.each(function() {
				var obj = $(this);

				var tabs = $('.tabs li', obj),
						tabContents = $('.contents .content', obj);

				//make the first tab active
				tabs.removeClass('active');
				tabs.eq(0).addClass("active");

				//hide all but the first tab contents
				tabContents.hide();
				tabContents.eq(0).show();

				//handle the tab clicks
				tabs.click(function(e) {

					var current = tabs.index($(this));

					e.preventDefault();

					//make new tab active
					tabs.removeClass("active");
					$(this).addClass("active");

					//show new tab content
					tabContents.hide();
					tabContents.eq(current).show();
				});
			});
		}
	});
})(jQuery);
