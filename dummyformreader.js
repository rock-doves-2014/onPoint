document.addEventListener("DOMContentLoaded", function(event) {

  function Echo(string, userText){
    this.quote = string;
    this.userText = userText || "";
    // this.sentTo = [];
    // this.bitly = SessionController.shortenUrl();
    // this.wasSent = false;
  }

  document.onmouseup = function run() {

    if (window.getSelection() != "") {

      var echoForm = document.getElementById("echo-submit");
      console.log(echoForm);

      var selectedString = window.getSelection().toString();
      console.log(selectedString);

      var userText = document.getElementById("userText").value;
      console.log(userText);

      var echo = new Echo(selectedString, userText);

      echoForm.addEventListener("submit", function(){
        console.log("form submitted");
        console.log("creating Echo object... ");



        // chrome.runtime.sendMessage({message: selectedString}, function(response) {
        // });

      });
    }
  };





});



