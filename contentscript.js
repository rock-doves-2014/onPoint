document.onmouseup = function run() {
  if (window.getSelection() != "") {
    selectedString = window.getSelection().toString()
    console.log(selectedString) // DELETE WHEN DONE!
    chrome.runtime.sendMessage({message: selectedString}, function(response) {
      console.log(response.answer); // DELETE WHEN DONE!
    });
  }
};