function findMovie(event) {}
// waits for the document to be fully loaded.
$(document).ready(function () {
  var settings = {
    url: "http://localhost:3000/",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  const form = document.getElementById("form");
  form.addEventListener("submit", findMovie);
});
