describe ("EchoFactory", function() {
  var factory;
  var formSubmission = {};

  beforeEach(function() {
  formSubmission.selectedString = "Tom Brady deflates Footballs!";
  formSubmission.userText = "@NewEnglandPatriots #deflategate";
  factory = new EchoFactory();
 });

 it("can produce a new Echo with the object it received from the page", function(){
  var babyEcho = EchoFactory.createEcho(formSubmission);
  expect(babyEcho.userText).toEqual("@NewEnglandPatriots #deflategate");
  expect(babyEcho.constructor).toEqual(Echo);
 });

});

//when selection is made, form is spawned
//write a failing test to return the value of the usertext of the echo object
//write a failing test that on submit, an echo object to sent
