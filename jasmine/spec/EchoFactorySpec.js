describe ("EchoFactory", function() {
  var formSubmission = {};
  var bogusUrl = "https://www.google.com";

  beforeEach(function() {
  formSubmission.selectedString = "Tom Brady deflates Footballs!";
  formSubmission.userText = "@NewEnglandPatriots #deflategate";
 });

 it("can produce a new Echo with the object it received from the page", function(){
  var babyEcho = EchoFactory.createEcho(formSubmission, bogusUrl);
  expect(babyEcho.userText).toEqual("@NewEnglandPatriots #deflategate");
  expect(babyEcho.constructor).toEqual(Echo);
 });

 it("can sanitize a url that has improperly formatted params", function(){
  var goodUrl = "http://example.com?query=parameter";
  var badUrl = "http://example.com/?query=parameter";
  expect( EchoFactory.sanitizeUrl(badUrl) ).toEqual(goodUrl);
 });

 xit("can shorten a url when passed one", function(){
  expect(EchoFactory.bitlyShorten(bogusUrl).length).toBeGreatThan(5);
  expect(EchoFactory.bitlyShorten(bogusUrl).length).toBeLessThan(30);
 });

});

//when selection is made, form is spawned
//write a failing test to return the value of the usertext of the echo object
//write a failing test that on submit, an echo object to sent
