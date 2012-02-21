jQuery.tabbed() navigation
===========

jQuery.tabbed() navigation is a light-weight jQuery plugin for handling tabbed navigation with minimal markup.

Demo
----

http://chovy.dyndns.org/jquery/tabbed-navigation/

Usage
-----

	<head>
		<link href="jquery.tabbed.css" rel="stylesheet" type="text/css" media="screen" />
		<!--[if IE]>
			<link href="jquery.tabbed.ie.css" rel="stylesheet" type="text/css" media="screen" />
		<![endif]-->

	</head>
	...
	<div class="tabbed">
		<ul class="tabs">
			<li><a href="#foo">Foo</a></li>
			<li><a href="ajax/content.php?tab=bar">Bar</a></li>
			<li><a href="#baz">Baz</a></li>
		</ul>
		<div class="contents">
			<div class="content" id="foo">Foo content</div>
			<div class="content" id="bar"></div>
			<div class="content" id="baz">Baz content</div>
		</div>
	</div>
	...
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery.tabbed.js"></script>
	<script>
	$(function(){
		$(".tabbed").tabbed();
	});
	</script>

Paste the above code in your document.

Download
--------

http://github.com/downloads/chovy/tabbed-navigation/jquery.tabbed-1.0.2.tgz

Requirements
------------

jQuery http://jquery.com (tested with jQuery 1.4, 1.6.2, 1.7.1, Firefox 10, Safari 5.1, Chrome 17, Opera 11, IE 7/8/9)
