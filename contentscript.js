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
    that.echoForm.setAttribute("class", "echo-frame");

    that.echoSubmit = document.createElement("div");
    that.echoSubmit.setAttribute("class", "echo-submit");
    that.echoForm.appendChild(that.echoSubmit);

    that.echoTest = document.createElement("form");
    that.echoTest.setAttribute("id", "test");
    that.echoSubmit.appendChild(that.echoTest);

    that.echoButton = document.createElement("button");
    that.echoButton.setAttribute("type", "submit");
    that.echoTest.appendChild(that.echoButton);

    that.echoText = document.createElement("input");
    that.echoText.setAttribute("type", "text");
    that.echoText.setAttribute("id", "userText");
    that.echoText.setAttribute("name", "userText");
    that.echoTest.appendChild(that.echoText);

    that.fileRef = document.createElement("link");
    that.fileRef.setAttribute("rel", "stylesheet");
    that.fileRef.setAttribute("type", "text/css");
    that.fileRef.setAttribute("href", chrome.extension.getURL("echoform.css"));
    document.getElementsByTagName("head")[0].appendChild(that.fileRef);

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(that.echoForm);









    that.echoForm.style.visibility = "visible";
    that.echoForm.style.left = x + "px";
    that.echoForm.style.top = y + "px";
    // that.echoForm.style.width = "495px";
    // that.echoForm.style.height = "85px";
    // that.echoForm.style.zIndex = 1;
  };
}
