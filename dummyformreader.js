document.addEventListener("DOMContentLoaded", function(event) {

  // is this the appropriate place to call this?
  var session = new SessionController();

  document.onmouseup = function run(event) {

    if (window.getSelection() != "") {

      xCoord = event.pageX;
      yCoord = event.pageY;
      // console.log("xCoord: " + xCoord);
      // console.log("yCoord: " + yCoord);

      session.spawnEchoForm(xCoord, yCoord);
      echoForm = document.getElementById(".echo-frame");

      var selectedString = window.getSelection().toString();

      // here for testing Echo object creation
      var url = document.URL;

      echoForm.addEventListener("submit", function(){
        var userText = document.getElementById("userText").value;
        createEcho(selectedString, userText, url);

        // what does this do? Ask Jorge.
        // chrome.runtime.sendMessage({message: selectedString}, function(response) {
        // });
      });

    } // end IF

    var hideEchoForm = function(event) {
      clickAwayX = event.pageX;
      clickAwayY = event.pageY;
      // console.log("clickAwayX: " + clickAwayX);
      // console.log("clickAwayY: " + clickAwayY);

      leftEchoFormX = xCoord - 1;
      rightEchoFormX = xCoord + 150;
      upEchoFormY = yCoord - 1;
      downEchoFormY = yCoord + 75;


      if ( echoForm ) {
        if (  (clickAwayX > rightEchoFormX) || (clickAwayY > downEchoFormY)  ) {
          $(".echo-frame").css("visibility", "hidden");
          echoForm = null;
          document.removeEventListener("click");
        }

        if (  (clickAwayX < leftEchoFormX) || (clickAwayY < upEchoFormY)  ) {
          $(".echo-frame").css("visibility", "hidden");
          echoForm = null;
          document.removeEventListener("click");
        }
      }
    };

    document.addEventListener("click", hideEchoForm(event));

  };  // end document mouse up





});



