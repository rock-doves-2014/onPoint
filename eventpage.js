chrome.runtime.onMessage.addListener(
  function(echo, sender, sendResponse) {

    var message = JSON.stringify(echo);

    var xml = new XMLHttpRequest();
    xml.open("POST", "http://localhost:3000/api/echos", true);
    xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xml.send(message);
    //body: selectedText + userText
    //chrome_token: chrome_token
    //google_credentials: google_credentials
    //url: url
    //is_draft: boolean (can be omitted)

    sendResponse({
      message: "Message: " + message
    });
});

chrome.identity.getProfileUserInfo(function(userInfo) {

})

