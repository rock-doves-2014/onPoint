function save_options() {
  var tw = document.getElementById("twitterOn").checked;
  var fb = document.getElementById("facebookOn").checked;
  var fbFloor = document.getElementById("facebookCharFloor").checked;
  var url = document.getElementById("alwaysAddUrl").checked;

  chrome.storage.sync.set({
    twitterOn: tw,
    facebookOn: fb,
    facebookCharFloor: fbFloor,
    alwaysAddUrl: url

  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved!';

    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    twitterOn: true,
    facebookOn: true,
    facebookCharFloor: true,
    alwaysAddUrl: true,
  }, function(items) {
    document.getElementById("twitterOn").checked = items.twitterOn;
    document.getElementById("facebookOn").checked = items.facebookOn;
    document.getElementById("facebookCharFloor").checked = items.facebookCharFloor;
    document.getElementById("alwaysAddUrl").checked = items.alwaysAddUrl;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);
