describe ("SessionController", function() {

  var session;
  var pointUser;


  beforeEach(function() {
    pointUser = {"name": "Mike Horn", "age": "29", "twitterOn": true};
    session = jasmine.createSpyObj('session', ['enabled', 'user']);

    session.enabled();
    session.user(pointUser);
  });

  it("creates spies for each requested function", function() {
    expect(session.enabled).toBeDefined();
    expect(session.user).toBeDefined();
  });

  it("tracks that the spies were called", function() {
    expect(session.enabled).toHaveBeenCalled();
    expect(session.user).toHaveBeenCalled();
  });

  it("pointUser object contains the proper values", function() {
    expect(pointUser).toEqual(jasmine.objectContaining({name: "Mike Horn"}));
    expect(pointUser).toEqual(jasmine.objectContaining({age: "29"}));
    expect(pointUser).toEqual(jasmine.objectContaining({twitterOn: true}));
  });

  it("session.enabled evaluates to true", function() {
    expect(session.enabled).toBeTruthy();
  });
});
