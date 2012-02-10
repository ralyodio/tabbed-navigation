(function($){
	$.fn.extend({ 
		tabbed: function() {

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

				tabs.click(function(e) {

					e.preventDefault();

					//Make new tab active
					tabs.removeClass("active");
					$(this).addClass("active");

					//Show new tab content
					tabContents.hide();
					var current = tabs.index($(this));
					tabContents.eq(current).show();
				});
			});
		}
	});
})(jQuery);
