"use strict";

// Main init function, which requires jquery to be available
function run() {
	var $body = $('body');

	
	// Bootstrap & Marked
	$body.append('<script src="marked.js"></script>')
	$body.append('<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>');
	$body.append('<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css" rel="stylesheet" />');
	$body.append('<link href="simitar.css" rel="stylesheet" />');
	$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />')


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

	$body.prepend(marked(window._markdown));
	

	// Finished, show body
	$body.fadeIn(200);
}

// Load jquery and call init function
function init() {
	var body = window.document.body;
	body.style.display = 'none';
	window._markdown = body.innerHTML;
	console.log(body.innerHTML);
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
