//for clicking

var noOfDrums = document.querySelectorAll(".drum").length;    //finding the length of drum beats
for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {  //traversing the array
    var buttonSound = this.innerHTML;        //getting the alphabets written 
    sound(buttonSound);
    buttonAnimation(buttonSound);
  });
}

//for keyboard

document.addEventListener("keypress", function (event) {
    sound(event.key);
    buttonAnimation(event.key);
});

//fnction to create sound

function sound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);
  }
}

//button animation on pressing
function buttonAnimation(currentkey)
{

    var activeButton=document.querySelector("."+currentkey);  //selecting class like .w,.l etc
    activeButton.classList.add("pressed");
    setTimeout (function(){
        activeButton.classList.remove("pressed");},100)   //removing animation after 0.1 sec after pressing
    }

