var EchoFactory = {

  createEcho: function(submissionObj) {
    this.url = getCurrentUrl();
    this.userText = submissionObj.userText || "";
    this.selectedString = submissionObj.selectedString;
    this.isDraft = submissionObj.isDraft || false;

    this.shortUrl = this.bitlyShorten(this.url);

    return new Echo(this.selectedString, this.userText, this.bitlyShorten);
  },

  bitlyShorten: function(url){
    var longUrl = url || this.url;
    //bitly logic
  },

  getCurrentUrl: function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs){
      return arrayOfTabs[0].id;
    });
  }

};
