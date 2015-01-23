document.addEventListener("DOMContentLoaded", function(event) {

  // is this the appropriate place to call this?
  var session = new SessionController();

  document.onmouseup = function run(event) {

    if (window.getSelection() != "") {

      var xCoord = event.pageX;
      var yCoord = event.pageY;

      var element = session.spawnEchoForm(xCoord, yCoord);

      var echoForm = document.getElementById("echo-submit");
      var selectedString = window.getSelection().toString();
      var userText = document.getElementById("userText").value;

      // here for testing Echo object creation
      var url = document.URL;

      echoForm.addEventListener("submit", function(){
        createEcho(selectedString, userText, url);

        // what does this do? Ask Jorge.
        // chrome.runtime.sendMessage({message: selectedString}, function(response) {
        // });
      });

    }
  };





});



