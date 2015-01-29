window.addEventListener("message", function(e) {
    if (e.data.content) {
        document.write(e.data.content);
    }
});