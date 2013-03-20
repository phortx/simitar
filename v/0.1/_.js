"use strict";

// Main init function, which requires jquery to be available
function run() {
	var $body = $('body'),
		$head = $('head');

	var basePath = '';
	$('script').each(function(i, script) {
		script = $(script);
		if (script.attr('src').match('/_.js$')) {
			basePath = script.attr('src');
		}
	});

	basePath = basePath.substr(0, basePath.lastIndexOf('/')) + '/';


	// Load resources
	$head.append('<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.no-icons.min.css" rel="stylesheet" />');
	$head.append('<link href="//netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet" />');
	$head.append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />');
	$head.append('<script src="' + basePath + 'marked.js"></script>');
	$head.append('<script src="' + basePath + 'prettify/prettify.js"></script>');
	$head.append('<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>');

	$body.prepend('<div class="container"></div>');

	// Load theme
	if ($body.attr('class')) {
		var theme = $body.attr('class').match('theme-([^ ]+)');

		if (theme) {
			theme = theme[1];
			$head.append('<link href="//netdna.bootstrapcdn.com/bootswatch/2.3.1/' + theme + '/bootstrap.min.css" rel="stylesheet" />');
		}
	}

	// Simitar and Prettify CSS
	$head.append('<link href="' + basePath + 'prettify/prettify.css" rel="stylesheet" />');
	$head.append('<link href="' + basePath + 'simitar.css" rel="stylesheet" />');


	// Workaround for possible loading problems
	var recurFn = function() {
		if (marked != undefined && prettyPrint != undefined) {
			finish();
		} else {
			window.setTimeout(recurFn, 100);
		}
	}

	recurFn();
}

function finish() {
	var $body = $('body'),
		$container = $('.container');
	
	// Parse markdown
	marked.setOptions({
		gfm: true,
		tables: true,
		breaks: true,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		langPrefix: 'language-',
		highlight: function(code, lang) {
			if (lang === 'js') {
				return highlighter.javascript(code);
			}
			return code;
		}
	});

	$container.html(marked(window._markdown));


	// Prettify
	$('pre').each(function(i, el) {
		el = $(el);
		el.addClass('prettyprint lang-' + el.attr('class'));
		el.html(el.html().trim());
	});

	prettyPrint();

	$('pre').wrap('<div class="well" />');


	// Icons
	var html = $container.html().replace(/\{\{([^ ]+)\}\}/g, '<i class="icon icon-$1"></i>');
	$container.html(html);


	// Finished, show body
	$body.show();
}

// Load jquery and call init function
function init() {
	var body = window.document.body;
	body.style.display = 'none';
	window._markdown = body.innerHTML;
	body.innerHTML = '';

	var script = window.document.createElement("script");

	var ready = function() {
		run();
	};

	// Internet Explorer
	if (script.readyState) {
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				window.setTimeout(ready, 0);
            }
        };
	// Everything else
    } else {
        script.onload = function() {
			window.setTimeout(ready, 0);
		}
    }

	script.src = 'http://code.jquery.com/jquery-1.9.1.min.js';
	body.appendChild(script);
}

if (window.addEventListener) {
	window.addEventListener("load", init, false);
} else if (elem.attachEvent) {
	window.attachEvent("onload", init);
}
