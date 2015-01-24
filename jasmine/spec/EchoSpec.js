describe ("createEcho", function() {
  var selectedString;
  var url;
  var userText;
  var newEcho;

  beforeEach(function() {
    selectedString = "Tom Brady deflates Footballs!";
    userText = "@NewEnglandPatriots #deflategate";
    url = "http://es.pn/1uHJOpV";

    function createEcho(selectedString, userText, url){
      newEcho = new Echo(selectedString, userText, url);
    }
  });


  it("all three arguments be defined", function() {
    expect(selectedString).toBeDefined();
    expect(userText).toBeDefined();
    expect(url).toBeDefined();
  });

  it("all three arguments to contain the content being passed in", function() {
    expect(selectedString).toEqual("Tom Brady deflates Footballs!");
    expect(userText).toEqual("@NewEnglandPatriots #deflategate");
    expect(url).toEqual("http://es.pn/1uHJOpV");
  });

  xit("newEcho is defined", function() {
    expect(newEcho).toBeDefined();
  });




});
