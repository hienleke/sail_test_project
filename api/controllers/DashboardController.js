// api/controllers/DashboardController.js
module.exports = {
  index: function (req, res) {
    // Check if the user is authenticated
    const cookies = req.cookies;
    console.log(" cookies out : ", cookies);

    if (!cookies.isLoggedIn) {
      // User is not logged in, redirect to login page
      return res.redirect("/home");
    }

    // Access user data if needed
    const userId = 123;

    // Render the dashboard view
    return res.view("dashboard", { userId });
  },
};
