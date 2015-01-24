function Echo(string, userText, url){
  this.quote = string;
  this.userText = userText || "";
  this.sentTo = [];
  // abbreviated bitly for testing & prep
  // remember to update line 1, need only 2 args!
  this.bitly = url;
  // this.bitly = SessionController.shortenUrl();
  this.wasSent = false;
}

Echo.prototype.asText = function(){
  if (this.userText == ""){
    return this.quote +"| "+ this.bitly;
  } else {
    return '"'+this.quote + '"| ' + this.userText + this.bitly;
  }
}

