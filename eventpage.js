chrome.runtime.onMessage.addListener(
  function(echo, sender, sendResponse) {

    var message = JSON.parse(echo);

    var xml = new XMLHttpRequest();
    xml.open("POST", "http://localhost:3000/json", true);
    xml.send(message);

    sendResponse({
      message: "Message: " + echo.message
    });
});
