describe ("DummyFormReader", function() {
  var session;

  beforeEach(function() {
    selectedString = "Tom Brady deflates Footballs!";
    userText = "@NewEnglandPatriots #deflategate";
    url = "http://es.pn/1uHJOpV";

    function createEcho(selectedString, userText, url){
      newEcho = new Echo(selectedString, userText, url);
    }
    console.log(newEcho);
  });

//when selection is made, form is spawned
//write a failing test to return the value of the usertext of the echo object
//write a failing test that on submit, an echo object to sent
