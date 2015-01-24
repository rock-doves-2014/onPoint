document.addEventListener("DOMContentLoaded", function(event) {

  // is this the appropriate place to call this?
  var session = new SessionController();

  document.onmouseup = function run(event) {

    if (window.getSelection() != "") {

      xCoord = event.pageX;
      yCoord = event.pageY;
      console.log("xCoord: " + xCoord);
      console.log("yCoord: " + yCoord);

      session.spawnEchoForm(xCoord, yCoord);
      echoForm = document.getElementById("echo-submit");

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

    } // end IF

    document.addEventListener("click", function(event){
      clickAwayX = event.pageX;
      clickAwayY = event.pageY;
      console.log("clickAwayX: " + clickAwayX);
      console.log("clickAwayY: " + clickAwayY);

      echoFormX = xCoord + 150;
      echoFormY = yCoord + 75;

      if (  echoForm ) {
          if (  (clickAwayX > echoFormX) || (clickAwayY > echoFormY)  ) {
                console.log("HIDE clickAwayX: " + rightEchoFormX);
                console.log("HIDE clickAwayY: " + downEchoFormY);

                $("#echo-submit").css("visibility", "hidden");
                echoForm = null;
          }
      }
    });

  };  // end document mouse up





});



