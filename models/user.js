function PointUser(googleAcctObj){
  this.googleAcctObj = googleAcctObj;
  this.userId = 0; //do something like: Database.addUser(this) TK
  this.drafts = [];
  this.pointHistory = {};
  this.alwaysAddUrl = true;
}

PointUser.prototype.turnOffUrlShare = function(){
  this.alwaysAddUrl = false;
}

PointUser.prototype.authFacebook = function(faceObj){
  this.facebookAcct = this.faceObj;
  this.facebookOn = true;
  this.facebookCharFloor = 0;
  //add needed steps to lock in fb oAuth TK
}

PointUser.prototype.authTwitter = function(twitterObj){
  this.twitterAcct = this.twitterObj;
  this.twitterOn = true;
  //add steps to lock in tw oAuth TK
}

PointUser.prototype.storeJSONState = function(){
  //return self as JSON object
  //IF db requires that. TK
}