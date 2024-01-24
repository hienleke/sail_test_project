$(document).ready(function () {
  // Specify the URL you want to make a GET request to
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

  // Make a GET request using jQuery.ajax()
  $.ajax({
    url: apiUrl,
    method: "GET",
    success: function (data) {
      // Handle the successful response
      console.log("Response Data:", data);
      if (data.isExpire == "true") {
        alert("key is exprite", data.content);
      }
    },
    error: function (error) {
      // Handle the error
      console.error("Error:", error);
    },
  });
});
