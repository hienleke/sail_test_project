// assets/js/script.js

$(document).ready(function () {
  // Load the stored ID when the page loads
  const storedId = localStorage.getItem("storedId");
  if (storedId) {
    $("#inputId").val(storedId);
  }

  // Attach click event to the Save button
  $("#saveButton").on("click", function () {
    // Get the input ID
    const inputId = $("#inputId").val();

    // Save the ID to localStorage
    localStorage.setItem("storedId", inputId);

    // Optionally, you can also use sessionStorage for a session-specific storage
    // sessionStorage.setItem('storedId', inputId);

    alert("ID saved!");

    // Make an AJAX call with the saved ID
    makeAjaxCall(inputId);
  });

  // Attach click event to the Subscribe button
  $("#subscribeButton").on("click", function () {
    // Get user subscription data (replace this with your actual data retrieval logic)
    const subscriptionData = {
      email: $("#emailInput").val(),
      // Other subscription data fields...
    };

    // Make an AJAX call to create the subscription
    createSubscription(subscriptionData);
  });

  function makeAjaxCall(id) {
    // Example: Make an AJAX call using jQuery.ajax
    $.ajax({
      url: "/your-api-endpoint/" + id, // Include the ID as a route parameter in the URL
      method: "GET",
      success: function (response) {
        console.log("AJAX Response:", response);

        // Handle the AJAX response here
      },
      error: function (error) {
        console.error("AJAX Error:", error);

        // Handle the AJAX error here
      },
    });
  }

  function createSubscription(subscriptionData) {
    // Example: Make a POST request using jQuery.ajax
    $.ajax({
      url: "/subscribe", // Replace with your actual subscription endpoint
      method: "POST",
      contentType: "application/json", // Specify content type as JSON
      data: JSON.stringify(subscriptionData), // Convert data to JSON string
      success: function (response) {
        console.log("Subscription successful:", response);

        // Handle the success response here
      },
      error: function (error) {
        console.error("Subscription failed:", error);

        // Handle the error response here
      },
    });
  }
});
