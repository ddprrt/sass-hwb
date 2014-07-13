sass-hwb
========

A Sass function for the HWB color model

# Introduction

The HWB color model is coming to CSS, and you can use it right now with Sass. Read more about the HWB model [here](http://fettblog.eu/hwb-colors/) and at the [W3C working draft for the CSS color module, level 4](http://dev.w3.org/csswg/css-color/#the-hwb-notation).

# Installation

Install it with [bower](http://bower.io) or download the `_hwb.scss` file from this repository.

```
bower install --save sass-hwb
```

Include the `_hwb.scss` file in your main Sass file:

```
@import "/bower_components/sass-hwb/src/hwb";
```

And start using it:

```
body {
	// results in rgba(127, 255, 0, 0.5)
	background-color: hwba(90deg, 0, 0, 0.5);
	// results in #7fe9ff
	color: hwb(190deg, 0.5, 0);
}
```

Enjoy!

# Demo

Try it at [Codepen](http://codepen.io/ddprrt/pen/Gxrwd)
