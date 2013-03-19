# simitar
Simple, lightwight, Bootstrap-based, Markdown-powered document generation WITHOUT any server side procession. It's just plain JavaScript (driven by buring hamsters running in circles to provide infinite energy - nothing is perfect)

IMPORTANT: This is under heavy development currently, come back later ;)


# Why?
Many time I just want to put a nice formatted document somewhere on my server to provide an howto for someone, write down some things for myself, share concepts, and so on. But plain HTML takes much effort to write and looks really ugly without any CSS. I just want to write text, not CSS. So a framework would be nice. Markdown would be nice. But server side processing is needless overhead for that use case. So what I want is a very easy, lightwight but yet powerful way to write documents fast on the webserver and share them with a fancy, readable layout and stuff. So simitar was born!


# Features
* Very easy to use: Just place a HTML file somewhere on the Webserver, write some markdown and be happy
* No installation required, just use it!
* Fancy and readable Layout
* Themable
* Uses Markdown for content formatting
* Special Markdown syntax extension for the easy usage of Font Awesome Icons (Hell yeah!)
* Use any bootstrap feature!


# Usage
Simitar doesn't require any installation since there is no server side code. You just place a HTML file, include the simitar script, wirte your markdown. Then the webserver will deliver the HTML file to the clients where the JavaScript will do the rest.

Example HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple example</title>
    <script src="http://github.com/phortx/simitar/v/0.2/_.js"></script>
  </head>
  
  <body>
    # Hello, world!
    Your markdown goes _here_
  </body>
</html>
```

As you see, theres no magic. Just place your markdown in the body and make sure the script tag in somewhere in your HTML file.

**Hint:** You can even use any HTML markup you want in the body, just mix it with your markdown, it will work!


# Markdown <3 Font Awesome
Icons may be used via the special simitar icon markdown syntax:
```
{{hand-right}} This text got an icon.
```

You find all icons on the [Bootstrap Icons Overview](http://twitter.github.com/bootstrap/base-css.html#icons).
Just take the name next to the icon, remove the "icon-" part and place the name between double braces: <code>{{ }}</code>.


# Themes
Theming is pretty simple. You know bootswatch.com? Now you do. Just take the name of a theme you like and put it as class name into your body, prefixed with "theme-":

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Simple theming example</title>
    <script src="http://github.com/phortx/simitar/v/0.2/_.js"></script>
  </head>
  
  <body class="theme-cosmos">
    # Hello, world!
    This is the **Cosmos Theme**!
  </body>
</html>
```


# Contribute
1. Fork on Github (https://github.com/phortx/simitar)
2. Make changes
3. Open a pull request
4. Get a beer and relax while
5. I'll merge it



# Licence
Copyright (c) 2013 Benjamin Kammerl aka phortx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
