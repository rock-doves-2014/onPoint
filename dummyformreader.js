document.addEventListener("DOMContentLoaded", function(event) {

  document.onmouseup = function run() {

    if (window.getSelection() != "") {


      var echoForm = document.getElementById("echo-submit");
      console.log(echoForm);

      selectedString = window.getSelection().toString()
      console.log(selectedString);

      // chrome.runtime.sendMessage({message: selectedString}, function(response) {

      // });

      echoForm.addEventListener("submit", function(){
        console.log("form submitted");
      });
    }
  };





});



