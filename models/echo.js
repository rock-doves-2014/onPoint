function Echo(highlightedString, userText, shortUrl){
  this.quote = highlightedString;
  this.userText = userText || "";
  this.sentTo = [];
  this.bitly = shortUrl;
  this.wasSent = false;
}

Echo.prototype.asText = function(){
  if(this.userText == ""){
    return this.quote +"| "+ this.bitly;
  } else {
    return '"'+this.quote + '"| ' + this.userText + this.bitly;
  };
};

