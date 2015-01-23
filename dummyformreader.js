document.addEventListener("DOMContentLoaded", function(event) {
  var echoForm = document.getElementById("echo-submit");

  echoForm.addEventListener("submit", function(){
      console.log("form submitted");
    });
});



