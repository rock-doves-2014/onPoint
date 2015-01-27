chrome.runtime.onMessage.addListener(
  function(echo, sender, sendResponse) {
    var promise = new Promise(function(resolve, reject) {
      chrome.identity.getProfileUserInfo(function(userInfo) {
        echo['google_credentials'] = userInfo.id;
      });
      chrome.storage.local.get('chrome_token', function(items) {
        echo['chrome_token'] = items.chrome_token
      });
      echo['url'] = sender.url
      var timer = setInterval(function() {
        if (echo['google_credentials'] != null && echo['chrome_token'] != null && echo['url'] != null) {
          resolve(echo);
          clearInterval(timer);
        }
      }, 100)
    }).then(function(value) {
      var message = JSON.stringify(echo);
      var xml = new XMLHttpRequest();
      xml.open("POST", "http://localhost:3000/api/echos", true);
      xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xml.send(message);
      sendResponse({
        message: "Message: " + message
      }, function(reason) {
      });
    });
});

chrome.identity.getProfileUserInfo(function(userInfo) {

})

