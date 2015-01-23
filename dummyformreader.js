document.addEventListener("DOMContentLoaded", function(event) {

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

      console.log(selectedString);

      echoForm.addEventListener("submit", function(){
        // create Echo in eventpage
        // how do I create a connection?
        createEcho(selectedString, userText, url);

        // chrome.runtime.sendMessage({message: selectedString}, function(response) {
        // });
      });

    }
  };





});



