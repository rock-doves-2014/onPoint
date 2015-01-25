document.onmouseup = function run(event) {
  event.stopPropagation();

  if (window.getSelection() != "") {
    xCoord = event.pageX;
    yCoord = event.pageY;

    var that = this;
    spawnedEcho = spawnEchoForm(xCoord, yCoord, that);
    var test = document.getElementById("test");

    var selectedString = window.getSelection().toString();

    test.addEventListener("submit", function(event){
      event.preventDefault();
      var userText = document.getElementById("userText").value;

      chrome.runtime.sendMessage({message: selectedString + " " + userText}, function(response) {
      });
    });

    document.onmousedown = function remove(event) {
      hideSpawnedEcho(event);
    };

  };
};

function spawnEchoForm(x, y, that) {

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

    that.echoForm.style.visibility = "visible";
    that.echoForm.style.left = x + "px";
    that.echoForm.style.top = y + "px";

    body = document.getElementsByTagName("body")[0];
    body.appendChild(that.echoForm);
    return true;
}

function hideSpawnedEcho(event) {
  clickAwayX = event.pageX;
  clickAwayY = event.pageY;

  leftEchoFormX = xCoord - 1;
  rightEchoFormX = xCoord + 150;
  upEchoFormY = yCoord - 1;
  downEchoFormY = yCoord + 75;

  if ( spawnedEcho ) {
    if (  (clickAwayX > rightEchoFormX) || (clickAwayY > downEchoFormY) || (clickAwayX < leftEchoFormX) || (clickAwayY < upEchoFormY) ) {
      var thing = document.getElementsByClassName("echo-frame")[0];
      body.removeChild(thing);
      spawnedEcho = null;
    }
  }
};
