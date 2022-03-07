window.onload = function () 
{
  var videoWrap = document.getElementById("videoWrap");
  var video = document.getElementById("video");
  var ribbonImg = document.getElementById("ribbonImg");
  var ribbonLeft = document.getElementById("ribbonLeft");
  var ribbonRight = document.getElementById("ribbonRight");

  ribbonImg.onclick = function () {
    cutFunc();
  };

  ribbonLeft.onclick = function () {
    cutFunc();
  };

  ribbonRight.onclick = function () {
    cutFunc();
  };

  function cutFunc() {

    ribbonImg.style.transform = "translateY(60vh)";
    ribbonLeft.style.transform = "rotate(90deg)";
    ribbonRight.style.transform = "rotate(-90deg)";
    setTimeout(function () {
      videoWrap.style.opacity = "1";
      videoWrap.style.filter = "blur(0)";
      videoWrap.style.height = "75vh";
    }, 500);
    

    if (video.paused){
        setTimeout(function () {
          video.play();
        }, 4000);
    } 
  }
};
