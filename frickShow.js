
//FrickShow.js - An open sourced slideshow plugin written in pure JS by Jakob Frick (2016). More info can be found at [imfalling.github.com/frickShow]

//Create variables to be used throughout the "class" file.
var privateSlides;
var privateid;
var privatedebug;
var privateintervaltime;
var loop;

var timeoutactive = false;
var processActive = false;
var goodTime = true;

//setup standard starting positions
var previousImgNum = 1;
var currentImgNum = 2;
var nextImgNum = 3;

//Main function which is called from index
function makeFrickShow(id, slides, init, intervaltime, debug){
  console.log("%c[[ "+"%cfrickShow.js 1.0.15 "+"%cLoaded Properly "+"%c]]", "color:red; font-weight: bold;", "color: darkGreen; font-weight: bold;", "color:purple; font-weight: bold;", "color:red; font-weight: bold;");
  //Assign values to private vars
  privateSlides = slides;
  privateid = id;
  privatedebug = debug;
  privateintervaltime = intervaltime;

  //Init vars for checking the parameters datatype
  var isString = false;
  var isNumber = false;
  var isBool = false;

  if(typeof(id) == "string"){
    isString = true;
  }

  if(typeof(slides) == "number" && typeof(init) == "number" && typeof(intervaltime) == "number"){
    isNumber = true;
  }

  if(typeof(debug) == "boolean"){
    isBool = true;
  }

  if(isString && isNumber && isBool){
      loadArrows();
    //Initiates base of slideshow
    var slideBody = document.getElementById(id.toString());

    //Adds images and their appropriate CSS based on the input "slides"
    for(var i = 1; i <= slides; i++){

      //Create variable for image
      var temp = document.createElement("img");

      //Set image and CSS attributes
      var yurl;
      for(var k = 1; k <= 4; k++){
        if(i == 1){
          yurl = ""+privateid+"/"+privateid+""+k.toString()+".png";
        }
        else if(k == 2){
          yurl = ""+privateid+"/"+privateid+""+k.toString()+".jpeg";
        }
        else if(k == 3){
          yurl = ""+privateid+"/"+privateid+""+k.toString()+".jpg";
        }
        else if(k == 4){
          yurl = ""+privateid+"/"+privateid+""+k.toString()+".gif";
        }

        if(checkFile(yurl)){
          temp.setAttribute("src", yurl);
        }
      }

      temp.style.opacity = 0;
      temp.style.display = "none";
      temp.style.verticalAlign = "middle";
      temp.style.position = "relative";
      temp.style.maxWidth = "100%";
      temp.style.maxHeight = "auto";

      //Set id and class for manipulation
      temp.setAttribute("id", id+"slide"+i.toString()+"");
      temp.setAttribute("class", id+"class");

      //Append image to main tag
      slideBody.appendChild(temp);
    }

      //Actual Function

      //Sets some css to the first image that loads, so that it's not blank
      var currentImg = document.getElementById(id+"slide"+currentImgNum.toString());
      currentImg.style.display = "block";
      currentImg.style.opacity = 1;
      currentImg.style.zIndex = 2;

      addEventListeners();

      //First image switch, waits a full second before initiating function
      setTimeout(function(){

        if(!processActive)
          switchImgFwd( document.getElementById(id+"slide"+currentImgNum.toString()), document.getElementById(id+"slide"+nextImgNum.toString()) );

      }, init);

      //Continues after first switch, a loop with an interval of 5 seconds.
      loop = setInterval(function(){

        if(!processActive)
        switchImgFwd( document.getElementById(id+"slide"+currentImgNum.toString()), document.getElementById(id+"slide"+nextImgNum.toString()) );

      }, intervaltime);

  }

  //If inputs are incorrect
  else{
    console.log("%c-New Error-", "color:red;");
    console.error("The error lies in this codeblock");
    console.log("-Is id a string? [" + isString + "] Are slides, init, and intervaltime numbers? [" + isNumber + "] Is Debug a boolean? ["+isBool+"]-");
    console.log("-Fix these, so that both statements return [true]-");
    console.log("%c-End of Error-", "color:red;");
  }
} //EOF makeFrickShow

function switchImgFwd(switchFrom, switchTo){
  if(privatedebug){console.log("Changing from image "+currentImgNum+" to image "+nextImgNum);}
  goodTime = false;
  processActive = true;
  //Increase the number of all 3 important images
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
        if(privatedebug){console.log("Interval Done");}
        goodTime = true;
        processActive = false;
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

} //EOF switchImgFwd

function switchImgBkw(switchFrom, switchTo){
  if(privatedebug){console.log("Changing from image "+currentImgNum+" to image "+previousImgNum);}
  goodTime = false;
  processActive = true;
  //Decrease the number of all 3 important images
  previousImgNum = decreaseNumber(previousImgNum);
  currentImgNum = decreaseNumber(currentImgNum);
  nextImgNum = decreaseNumber(nextImgNum);

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
        if(privatedebug){console.log("Interval Done");}
        goodTime = true;
        processActive = false;
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

function loadArrows(){

  for(i = 1; i <= 2; i++){
    var slideBody2 = document.getElementById(privateid);
    var arrow = document.createElement("div");

    var arrowImg = document.createElement("img");
    arrowImg.setAttribute("class", "arrowImgClass");
    arrowImg.setAttribute("src", "https://raw.githubusercontent.com/ImFalling/FrickShow/gh-pages/frickShow/arrow.png");
    arrowImg.style.width = "100%";
    arrowImg.style.height = "auto";

    arrow.appendChild(arrowImg);

    arrow.style.position = "absolute";
    arrow.style.zIndex = 3;
    arrow.style.width = "10%";
    arrow.style.height = "auto";

    if(i == 1){
      arrow.setAttribute("id", ""+privateid+"leftArrow");
      arrow.style.transform = "rotate(0deg)";
      arrow.style.left = "0";
      arrow.style.marginTop = "25%";
    }

    if(i == 2){
      arrow.setAttribute("id", ""+privateid+"rightArrow");
      arrow.style.transform = "rotate(180deg)";
      arrow.style.right = "0";
      arrow.style.marginTop = "24.5%";
    }

    slideBody2.appendChild(arrow);
  }
}

function addEventListeners(){
  document.getElementById(""+privateid+"leftArrow").addEventListener("click", function(){
    if(goodTime){
      if(privatedebug){console.log("Loop halted due to left arrow");}
      clearInterval(loop);

      if(!processActive)
        switchImgBkw( document.getElementById(privateid+"slide"+currentImgNum.toString()), document.getElementById(privateid+"slide"+previousImgNum.toString()) );

      if(!timeoutactive){
        holdUp();
      }
    }
  });

  document.getElementById(""+privateid+"rightArrow").addEventListener("click", function(){
    if(goodTime){
      if(privatedebug){console.log("Loop halted due to right arrow");}
      clearInterval(loop);

      if(!processActive)
        switchImgFwd( document.getElementById(privateid+"slide"+currentImgNum.toString()), document.getElementById(privateid+"slide"+nextImgNum.toString()) );

      if(!timeoutactive){
        holdUp();
      }
    }
  });
}

function holdUp(){
  timeoutactive = true;
  setTimeout(function(){
    restartLoop();
  }, 5000);
}

function restartLoop(){
  timeoutactive = false;
  loop = setInterval(function(){

  if(!processActive)
        switchImgFwd( document.getElementById(privateid+"slide"+currentImgNum.toString()), document.getElementById(privateid+"slide"+nextImgNum.toString()) );

  }, privateintervaltime);
}

function checkFile(url){
  var tempo = new Img();
  tempo.src = url;
  return tempo !== null;
}
