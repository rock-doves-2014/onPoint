chrome.runtime.onMessage.addListener(
  function(echo, sender, sendResponse) {

    var message = JSON.stringify(echo);

    var xml = new XMLHttpRequest();
    xml.open("POST", "http://localhost:3000/api/echos", true);
    xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xml.send(message);

    sendResponse({
      message: "Message: " + message
    });
});

chrome.identity.getProfileUserInfo(function(userInfo) {

})

