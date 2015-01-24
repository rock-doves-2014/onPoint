document.onmouseup = function run(event) {
  event.stopPropagation();

  if (window.getSelection() != "") {
    console.log("3");

    xCoord = event.pageX;
    yCoord = event.pageY;

    console.log(xCoord);

    var that = this;
    spawnEchoForm(xCoord, yCoord, that);
    console.log(this);

  };

};

function spawnEchoForm(x, y, that) {


  if (!that.echoForm) {
    console.log("4");

    that.echoForm = document.createElement("div");
    console.log(that.echoForm);
    console.log(that);

    that.echoForm.setAttribute("class", "echo-frame");
    that.echoForm.style.position = "absolute";
    that.echoForm.style.visibility = "visible";
    that.echoForm.style.left = x + "px";
    that.echoForm.style.top = y + "px";
    // that.echoForm.style.backgroundColor = "red";
    // that.echoForm.style.height = "100px";
    // that.echoForm.style.width = "100px";
    that.echoForm.style.zIndex = 5e6;

    // that.echoForm.background = url('sage_sound.png') center no-repeat #333333;

    var imgURL = chrome.extension.getURL("sage_sound.png");
    that.echoForm.style.background = imgURL;

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(that.echoForm);



  };



  // $(".echo-frame").css("visibility", "visible");
  // $(".echo-frame").css("left", x);
  // $(".echo-frame").css("top", y);
}
