document.addEventListener('DOMContentLoaded', function() {
  userRailsOauth();
  twitterOauthStarter();
  facebookOauthStarter();
});

function userRailsOauth() {
  chrome.identity.getProfileUserInfo(function(userInfo) {

    var promise = new Promise(function(resolve, reject) {
      var xml = new XMLHttpRequest();
      xml.open("POST", "http://localhost:3000/api/users", true);
      xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xml.setRequestHeader("Accept", "application/json");
      xml.onload = function() {
        if (xml.status === 200) {
          var responseString = JSON.parse(xml.response);
          chrome.storage.sync.set({
            'chrome_token': responseString.key
          });
        } else {
          reject("Your response was bad.")
        };
      };
      var timer = setInterval(function() {
        if (userInfo['email'] != "" && userInfo['id'] != "") {
          var message = JSON.stringify(userInfo);
          xml.send(message);
          clearInterval(timer);
        }
      }, 100)
    });
    return promise;
  });
};

function RailsTwitterOauth() {
  chrome.identity.getProfileUserInfo(function(userInfo) {
    var message = JSON.stringify(userInfo);
    chrome.tabs.create({ url: "http://localhost:3000/auth/twitter?google_credentials=" + userInfo.email });
  });
};

function twitterOauthStarter() {
  document.getElementById('TwitterOauth').addEventListener('click', function(event) {
    event.preventDefault();
    RailsTwitterOauth();
  });
};

function RailsFacebookOauth() {
  chrome.identity.getProfileUserInfo(function(userInfo) {
    var message = JSON.stringify(userInfo);
    chrome.tabs.create({ url: "http://localhost:3000/auth/facebook" });
  });
};

function facebookOauthStarter() {
  document.getElementById('FacebookOauth').addEventListener('click', function(event) {
    event.preventDefault();
    RailsFacebookOauth();
  });
};
