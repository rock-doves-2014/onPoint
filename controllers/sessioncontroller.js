function SessionController(pointUser){
  this.enabled = true;
  this.user = pointUser;
}

SessionController.prototype.shortenUrl = function(){
  //IF getUrl() returns a string and not false...
  //TK get the url from google chrome, query bitly, and send the shortened link;
};

SessionController.prototype.getUrl = function(){
  if (this.user.alwaysAddUrl){
    var tabUrl = chrome.tabs.query({
      active: true, currentWindow: true}, function(tabs){
      var tab = tabs[0];
      return tab.url;
    });
  } else {return false};
}

SessionController.prototype.pause = function(){
  this.enabled = false;
}

SessionController.prototype.echoListener = function(){
  //watch the page for highlighting w/ cursor TK
}

SessionController.prototype.spawnEchoForm = function(){
  // build the form anchored on the highlighting TK
}


