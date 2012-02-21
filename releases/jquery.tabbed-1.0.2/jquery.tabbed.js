/*!
 * jQuery.tabbed() v1.0.2
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

			var activateTab = function( tab, tabContent, tabs, tabContents ){
				var url = tab.find('a').attr('href').split('#');

				//make the first tab active
				tabs.removeClass('active');
				tab.addClass("active");

				//hide all but the first tab contents
				tabContents.hide();

				//we have a url, do ajax call
				if ( url[0] ) {
					tabContent.html('');
					tabContent.show();
					tabContent.addClass('loading').load(url[0], function(){
						tabContent.removeClass('loading');
					});
				} else {
					tabContent.show();
				}
			};

			return this.each(function() {
				var obj = $(this);
				var tabs = $('.tabs li', obj),
						tabContents = $('.contents .content', obj),
						firstTab = tabs.eq(0),
						firstContent = tabContents.eq(0);

				activateTab(firstTab, firstContent, tabs, tabContents);

				//handle the tab clicks
				tabs.click(function(e) {

					var current = tabs.index($(this)),
							currentContent = tabContents.eq(current);

					e.preventDefault();

					activateTab( $(this), currentContent, tabs, tabContents );
				});
			});
		}
	});
})(jQuery);
