let drumTotal = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumTotal; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    makeAudio(buttonInnerHTML);
    animatedButton(buttonInnerHTML);
  });
}

// deteksi saat ada keyboard yang di tekan / press
document.addEventListener("keypress", function (event) {
  console.log(event.key);
  makeAudio(event.key);
  animatedButton(event.key);
});

function makeAudio(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function animatedButton(currentkey) {
  document.querySelector(`.${currentkey}`).classList.toggle(`pressed`);

  setTimeout(() => {
    document.querySelector(`.${currentkey}`).classList.remove("pressed");
  }, "10");
}
