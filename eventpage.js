chrome.commands.onCommand.addListener(function(command) {

  var yo = function(command){
    console.log(command);
  };

  yo("ok");
});



chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "knockknock");
  port.onMessage.addListener(function(msg) {
    if (msg.joke == "Knock knock")
      port.postMessage({question: "Who's there?"});
    else if (msg.answer == "Madame")
      port.postMessage({question: "Madame who?"});
    else if (msg.answer == "Madame... Bovary")
      port.postMessage({question: "I don't get it."});
  });
});












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

  console.log(userInfo);
  console.log(userInfo.id);
  console.log(userInfo.email);

  // var xml = new XMLHttpRequest();
  // xml.open("POST", "http://localhost:3000/api/echos", true);
  // xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xml.send(userInfo);

})

