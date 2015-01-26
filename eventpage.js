chrome.runtime.onMessage.addListener(
  function(echo, sender, sendResponse) {

    var message = JSON.stringify(echo);

    var xml = new XMLHttpRequest();
    xml.open("POST", "http://localhost:3000/json", true);
    xml.send(echo);

    sendResponse({
      message: "Message: " + echo.message,
      senderID: "SenderID: " + sender.id
    });
});
