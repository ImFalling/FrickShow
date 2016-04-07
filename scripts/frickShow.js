
//FrickShow.js - An open sourced slideshow plugin written in pure JS by Jakob Frick (2016). More info can be found at [imfalling.github.com/frickShow]

console.log("%c[[ "+"%cfrickShow.js "+"%cLoaded Properly "+"%c]]", "color:red; font-weight: bold;", "color: darkGreen; font-weight: bold;", "color:purple; font-weight: bold;", "color:red; font-weight: bold;");

var privateSlides;
var privateid;

//setup standard starting positions
var previousImgNum = 1;
var currentImgNum = 2;
var nextImgNum = 3;

function makeFrickShow(id, slides){
  privateSlides = slides;
  privateid = id;
  var isString = false;
  var isNumber = false;

  if(typeof(id) == "string"){
    isString = true;
  }

  if(typeof(slides) == "number"){
    isNumber = true;
  }

  if(isString && isNumber){
    //Initiates base of slideshow
    var slideBody = document.getElementById(id.toString());
    console.log(slideBody);
    for(var i = 1; i <= slides; i++){
      var temp = document.createElement("img");
      //Set image
      temp.setAttribute("src", ""+id+"/"+id+""+i.toString()+".png");
      temp.style.opacity = 0;
      temp.style.display = "none";
      temp.style.verticalAlign = "middle";
      temp.style.position = "relative";
      temp.style.maxWidth = "100%";
      temp.style.maxHeight = "auto";

      temp.setAttribute("id", id+"slide"+i.toString()+"");
      temp.setAttribute("class", id+"class");

      slideBody.appendChild(temp);
    }

      //Actual Function
      var previousImg = document.getElementById(id+"slide"+previousImgNum.toString());

      var currentImg = document.getElementById(id+"slide"+currentImgNum.toString());
      currentImg.style.display = "block";
      currentImg.style.opacity = 1;
      currentImg.style.zIndex = 2;

      var nextImg = document.getElementById(id+"slide"+nextImgNum.toString());

      setTimeout(function(){
        switchImgFwd( document.getElementById(id+"slide"+currentImgNum.toString()), document.getElementById(id+"slide"+nextImgNum.toString()) );
      }, 1000);

      setInterval(function(){
        switchImgFwd( document.getElementById(id+"slide"+currentImgNum.toString()), document.getElementById(id+"slide"+nextImgNum.toString()) );
      }, 5000);

  }

  else{
    console.log("%c-New Error-", "color:red;");
    console.error("The error lies in this codeblock");
    console.log("-Is id a string? [" + isString + "] Is slides a number? [" + isNumber + "]-");
    console.log("-Fix these, so that both statements return [true]-");
    console.log("%c-End of Error-", "color:red;");
  }
} //EOF makeFrickShow

function switchImgFwd(switchFrom, switchTo){
  console.log("Changing from image "+currentImgNum+" to image "+nextImgNum);
  previousImgNum = incrementNumber(previousImgNum);
  currentImgNum = incrementNumber(currentImgNum);
  nextImgNum = incrementNumber(nextImgNum);

  switchFrom.style.display = "block";
  switchFrom.style.opacity = 1;
  switchFrom.style.zIndex = 2;

  switchTo.style.opacity = 1;
  switchTo.style.display = "block";
  switchTo.style.position = "absolute";
  switchTo.style.bottom = "0";
  switchTo.style.zIndex = 1;

  var startInnerInterval = setInterval(function(){

      if(switchFrom.style.opacity < 0.1){
        console.log("Interval Done");
        switchFrom.style.opacity = 0;
        switchFrom.style.position = "relative";
        switchFrom.style.display = "none";
        switchTo.style.position = "relative";

        clearInterval(startInnerInterval);
      }

      else{
        switchFrom.style.opacity -= 0.01;
      }

    }, 10);

}

function incrementNumber(imgNum){
  if(imgNum == privateSlides){
    return 1;
  }

  else{
    return imgNum+1;
  }

}

function decreaseNumber(imgNum){
  if(imgNum == 1){
    return privateSlides;
  }

  else{
    return imgNum-1;
  }
}
