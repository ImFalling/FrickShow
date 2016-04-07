# FrickShow
## A Simple Implementation of Slideshows in JS

This is a very simple, very barebones slideshow plugin for web development.
It was originally made due to demand from a classmate, but will no doubt be good for future use.

## [Demo Here](http://imfalling.github.io/FrickShow/)
#####[Source Here](https://github.com/ImFalling/FrickShow/tree/gh-pages)

## How to install
Simply add this line to your head tag. Make sure to add it before any files that will use it.

```html
  <head>
    <script type="text/javascript" src="https://raw.githubusercontent.com/ImFalling/FrickShow/master/frickShow.js"></script>
  </head>
```

### How to use:

**First of all, import the JS file by following the instructions above, and create an empty div with your choice of ID in the body tag:**

```html
<!DOCTYPE html>

<head>
  <script type="text/javascript" src="https://raw.githubusercontent.com/ImFalling/FrickShow/master/frickShow.js"></script>
</head>

<body>

  <div id="YOUR_ID_HERE"></div>

</body>
```

**Afterwards, either in a script tag, or in a separate JS document, create a new instance of makeFrickShow**

***(If in a separate document, make sure it's imported / loaded after FrickShow)***

```javascript
var slideShowName = makeFrickShow("YOUR_ID", NUMBER_OF_IMAGES, INITIAL_DELAY[ms], LOOP_DELAY[ms], DEBUG[t/f])
```

**YOUR_ID** = The ID of your basediv (String)

**NUMBER_OF_IMAGES** = The number of images to scroll through (Number)

**INITIAL_DELAY** = How long to wait after page has loaded to start the loop (Number in Milliseconds)

**LOOP_DELAY** = How long to wait between each transition (Number in Milliseconds)

**DEBUG** = Debug mode (Boolean (True or False)) (False recommended)

**Then, make sure the base div has *at least* these CSS attributes**
```css
  #YOUR_ID_HERE{
    position: relative;
    width: 40%;
    height: auto;
  }
```

**Feel free to add CSS! Position must be relative, however, or the tag breaks.**

```css
  /* CSS settings used in the demo*/
  #YOUR_ID_HERE{
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;

    padding: 0;
    border: 3px solid gray;

    display: block;
    position: relative;

    width: 40%; /* Recommended way of adjusting size. Set height to auto, and solely change the width */
    height: auto;
  }

```

**Finally, for every basediv, create a folder in the directory of your HTML file with the same exact name as the ID of your basediv.**

Put all your images (As PNG Files) in this folder - and name them like so:
*id#*

**For Example:**

If my ID is "mainSlide", and I had three images to scroll through, then I would create the following files:

mainSlide1.png

mainSlide2.png

mainSlide3.png


### Sidenotes

**I've only tested with images in 1920*1080 resolution. In theory, other sizes should work.**

I would however recommend that all images are the identical size. Again, the plugin should probably work,
but the transitions will look very ugly and choppy.

FrickShow is a play-on-words of Slideshow and Freakshow. Hilarious, I know.

Written in one day by Jakob Frick (April 7th 2016)
