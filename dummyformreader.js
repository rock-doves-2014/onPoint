document.addEventListener("DOMContentLoaded", function(event) {

  var session = new SessionController();

  document.onmouseup = function run() {

    if (window.getSelection() != "") {

      var element = session.spawnEchoForm();

      var echoForm = document.getElementById("echo-submit");
      var selectedString = window.getSelection().toString();
      var userText = document.getElementById("userText").value;

      // here for testing Echo object creation
      var url = document.URL;

      // echoForm.addEventListener("submit", function(){
        // var echo = new Echo(selectedString, userText, url);
        // console.log(echo);
        // debugger in place to see the echo event p to console
        // debugger;

        // chrome.runtime.sendMessage({message: selectedString}, function(response) {
        // });
      // });

    }
  };





});



