document.onmouseup = function run(event) {
  event.stopPropagation();

  if (window.getSelection() != "") {
    xCoord = event.pageX;
    yCoord = event.pageY;

    var that = this;
    spawnEchoForm(xCoord, yCoord, that);
  };

};

function spawnEchoForm(x, y, that) {

  if (!that.echoForm) {
    that.echoForm = document.createElement("div");
    that.imageForm = document.createElement("img");
    that.imageForm.setAttribute("src", chrome.extension.getURL("sage_sound.png"));
    that.echoForm.appendChild(that.imageForm);
    that.echoForm.setAttribute("class", "echo-frame");
    that.echoForm.style.position = "absolute";
    that.echoForm.style.visibility = "visible";
    that.echoForm.style.left = x + "px";
    that.echoForm.style.top = y + "px";
    that.echoForm.style.width = "495px";
    that.echoForm.style.height = "85px";
    that.echoForm.style.zIndex = 1;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(that.echoForm);
  };
}
