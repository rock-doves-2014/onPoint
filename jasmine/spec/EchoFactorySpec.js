describe ("EchoFactory", function() {
  var formSubmission = {};
  var bogusUrl = "https://www.google.com";

  beforeEach(function() {
  formSubmission.selectedString = "Tom Brady deflates Footballs!";
  formSubmission.userText = "@NewEnglandPatriots #deflategate";
 });

 it("can produce a new Echo with the object it received from the page", function(){
  var babyEcho = EchoFactory.createEcho(formSubmission);
  expect(babyEcho.userText).toEqual("@NewEnglandPatriots #deflategate");
  expect(babyEcho.constructor).toEqual(Echo);
 });

 xit("can shorten a url when passed one", function(){
  expect(EchoFactory.bitlyShorten(bogusUrl).length).toBeGreaterThan(5);
  expect(EchoFactory.bitlyShorten(bogusUrl).length).toBeLessThan(30);
 });

 it("can read the current tab url to use in Echo construction", function(){
  expect(EchoFactory.getCurrentUrl().constructor).toEqual(String);
  expect(EchoFactory.getCurrentUrl().length).toBeGreaterThan(5);
 });

});

//when selection is made, form is spawned
//write a failing test to return the value of the usertext of the echo object
//write a failing test that on submit, an echo object to sent
