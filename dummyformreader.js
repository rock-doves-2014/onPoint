document.addEventListener("DOMContentLoaded", function(event) {

  // function Echo(string, userText){
  //   this.quote = string;
  //   this.userText = userText || "";
    // this.sentTo = [];
    // this.bitly = SessionController.shortenUrl();
    // this.wasSent = false;
  // }

  document.onmouseup = function run() {

    if (window.getSelection() != "") {

      var echoForm = document.getElementById("echo-submit");
      var selectedString = window.getSelection().toString();
      var userText = document.getElementById("userText").value;


      echoForm.addEventListener("submit", function(){

        var echo = new Echo(selectedString, userText);
        console.log(echo);
        debugger;

        // chrome.runtime.sendMessage({message: selectedString}, function(response) {
        // });

      }, 2000);

    }
  };





});



