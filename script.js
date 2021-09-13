var nextScreens = {
  'about': 'interests',
  'interests': 'projects'
  
};

var prevScreens = {
  'interests': 'about',
  'projects':'interests'
}
//  JSON does not guarantee order - change to array or use linked list
var body = document.getElementsByTagName('body')[0];
var homeButton = document.getElementsByClassName('button')[0];
var about = document.getElementsByClassName('about')[0];
var textSegment = document.getElementsByClassName('text-wrapper')[0];
var socials = document.getElementsByClassName('socials')[0];
var count = 0;
homeButton.onclick = () => {
  if(count != 0){
    return false;
  }
  homeButton.classList.add("invisible");
  about.style.left="0px";
  // textSegment.style.opacity="0";
  
  textSegment.style.transition ="transform 2s, opacity 1s";
  textSegment.style.transform = "scale(0)";
  textSegment.style.opacity = "0";
  homeButton.disabled = true;
  count++;
  // textSegment.innerHTML = "";
  // textSegment.style.opacity="1";
};

function moveForward(currentScreen){
  if(currentScreen == "projects"){
    var mobile = document.getElementsByClassName('mobile-wrapper')[0];
   
    mobile.style.transition = "transform 2s";
    mobile.style.transform = "rotateZ(1080deg) scale(0.3) translateX(3px)";
    textSegment.style.transition ="transform 3s, opacity 2s";
    // body.style.gridTemplateColumns = "50vw 50vw";
    // body.style.transition = "grid-template-columns 2s";
    textSegment.style.transform = "scale(1)";
    textSegment.style.width = "50vw";
    textSegment.style.opacity = "1";
    textSegment.style.marginLeft = "10vw";
    document.getElementsByClassName('text')[0].innerHTML = "You can find me on:";
    socials.style.display = "block";

  }
  else{
    var next = nextScreens[currentScreen];
    var nextScreen = document.getElementsByClassName(next)[0];
    nextScreen.style.left = "0px";
  }
 
  // current.style.visibility="hidden";
  
  //add back function :""
  // current.style.visibility="visible";
}

function moveBack(currentScreen){
  var current = document.getElementsByClassName(currentScreen)[0];
  current.style.left = "40vh";
}