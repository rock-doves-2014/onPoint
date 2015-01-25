describe ("SessionController", function() {

  var session;
  var mike;
  var googleAcctObj;

  beforeEach(function() {
    googleAcctObj = {"name": "Mike Horn", "email": "mhorn918@gmail.com"};
    mike = new PointUser(googleAcctObj);
    session = new SessionController(mike);

    var jsonFromDom = {
      "selectedString" : "Tom Brady deflates Footballs!",
      "userText" : "@NewEnglandPatriots #deflategate",
      "isDraft" : false
    };

    var anotherUrl = "https://nytimes.com";
  });

  it("has a user", function() {
    expect(session.user).toBeDefined();
  });

   it("can return its user", function() {
    expect(session.user).toEqual(mike);
  });

  it("it can read the properties from the user that were instantiated at user object creation", function() {
    expect(session.user.googleAcctObj).toEqual(googleAcctObj);
    expect(session.user.userId).toEqual(0);
    expect(session.user.drafts.constructor).toEqual(Array);
    expect(session.user.pointHistory.constructor).toEqual(Object);
  });

  it("mike object contains the proper values", function() {
    expect(mike.googleAcctObj).toEqual(jasmine.objectContaining({name: "Mike Horn"}));
    expect(mike.googleAcctObj).toEqual(jasmine.objectContaining({email: "mhorn918@gmail.com"}));
  });

  it("session.enabled evaluates to true", function() {
    expect(session.enabled).toBeTruthy();
  });

  xit("session can return the user's email", function() {
    expect(session.userEmail()).toEqual("mhorn918@gmail.com");
  });

  xit("can shorten a url", function(){
    var bitly = session.shortenUrl();
    expect(session.bitly).toBeTruthy;
    expect(session.bity.length).toBeGreaterThan(4);
  });

  xit("returns false if the user doesn't want to append links", function(){
    mike.turnOffUrlShare();
    expect(session.shortenUrl()).toBeFalsy;
  });

  xit("can read whether the Echo is slated for drafts or outbound", function(){
    var newEcho = EchoFactory.createEcho(jsonFromDom);
  });

});
