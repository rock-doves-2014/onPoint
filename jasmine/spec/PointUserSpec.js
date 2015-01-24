describe ("PointUser", function() {
  var user;
  var googleAcctObj;

  beforeEach(function() {
    googleAcctObj = {email : "frank@frank.net"};
    user = jasmine.createSpyObj('user', ['googleAcctObj', 'userId', 'drafts', 'pointHistory', 'alwaysAddUrl']);

    user.googleAcctObj();
    user.userId(1);
    user.drafts("These pretzels are making me thirsty @jorge #yolo");
    user.pointHistory({"1": "Post 1"});
    user.alwaysAddUrl();
  });

  it("creates spies for each requested function", function(){
    expect(user.googleAcctObj).toBeDefined();
    expect(user.userId).toBeDefined();
    expect(user.drafts).toBeDefined();
    expect(user.pointHistory).toBeDefined();
    expect(user.alwaysAddUrl).toBeDefined();
  });

  it("tracks that the spies were called", function(){
    expect(user.googleAcctObj).toHaveBeenCalled();
    expect(user.userId).toHaveBeenCalled();
    expect(user.drafts).toHaveBeenCalled();
    expect(user.pointHistory).toHaveBeenCalled();
    expect(user.alwaysAddUrl).toHaveBeenCalled();
  });
});
