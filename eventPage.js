chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Run logic with captured string.
    sendResponse({answer: "I got:" + request.message });
  });