document.onmouseup = function run(event) {
  console.log("2");

  if (window.getSelection() != "") {
    console.log("3");

    xCoord = event.pageX;
    yCoord = event.pageY;

    spawnEchoForm(xCoord, yCoord);

  };

};

function spawnEchoForm(x,y) {
  if (!this.echoForm) {
    console.log("4");

    this.echoForm = document.createElement("div");
    this.echoForm.setAttribute("class", "echo-frame");
    this.echoForm.style.position = "absolute";
    this.echoForm.style.visibility = "visible";
    this.echoForm.style.left = x;
    this.echoForm.style.top = y;
    this.echoForm.style.backgroundColor = "red";
    this.echoForm.style.height = "100";
  }



  // $(".echo-frame").css("visibility", "visible");
  // $(".echo-frame").css("left", x);
  // $(".echo-frame").css("top", y);
}
