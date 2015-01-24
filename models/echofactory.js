var EchoFactory = {

  createEcho: function(submissionObj, url) {
    this.url = url;
    this.userText = submissionObj.userText || "";
    this.selectedString = submissionObj.selectedString;

    this.shortUrl = this.bitlyShorten(this.url);

    return new Echo(this.selectedString, this.userText, this.bitlyShorten);
  },

  bitlyShorten: function(url){
    var longUrl = url || this.url;
    //bitly logic
  }

};
