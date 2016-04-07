# FrickShow
## A Simple Implementation of Slideshows in JS

This is a very simple, very barebones slideshow plugin for web development.
It was originally made due to demand from a classmate, but will no doubt be good for future use.

### How to use:

**First of all, import the JS file, and create an empty div with your choice of ID in the body tag:**

```html
<!DOCTYPE html>

<head>
  <script type="text/javascript" src="frickShow.js"></script>
</head>

<body>

  <div id="mainSlide"></div>

</body>
```

**Afterwards, either in a script tag, or in a separate JS document, create a new instance of makeFrickShow**

***(If in a separate document, make sure it's imported / loaded after FrickShow)***

```javascript
var slideShowName = makeFrickShow("id", number)
```

**Then, make sure the base div has *at least* these elements**
```css
  #mainSlide{
    position: relative;
    width: x%;
    height: auto;
  }
```

**Feel free to add CSS! Position must be relative, however, or the tag breaks.**

```css
  /* CSS settings used in the demo*/
  #mainSlide{
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
