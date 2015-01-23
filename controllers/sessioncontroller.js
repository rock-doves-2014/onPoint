function SessionController(pointUser){
  this.enabled = true;
  this.user = pointUser;
}

SessionController.prototype.shortenUrl = function(){
  if (this.user.alwaysAddUrl){
    var tabUrl = chrome.tabs.query({
      active: true, currentWindow: true}, function(tabs){
      var tab = tabs[0];
      var url = tab.url;
    })

    console.log(url + "*****minify me!");
    return "bitlyurl"; //TK; use above url
  } else {return ""};
}

SessionController.prototype.pause = function(){
  this.enabled = false;
}

SessionController.prototype.echoListener = function(){
  //watch the page for highlighting w/ cursor TK
}

SessionController.prototype.spawnEchoForm = function(){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("ECHOOOO");
    btn.appendChild(t);
    document.body.appendChild(btn);
}
