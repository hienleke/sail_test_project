// api/controllers/AuthController.js

module.exports = {
  login: async function (req, res) {
    const { username, password } = req.allParams();

    try {
      if (username == "A" && password == "B") {
        res.cookie("isLoggedIn", true, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // Set cookie to expire in 30 days
        // Redirec to dashboard upon successful login
        let userId = 123;
        return res.redirect("/dashboard");
      } else {
        res.json(" fail");
      }
    } catch (err) {
      // Handle login failure
      console.error(err);
      res.redirect("/login"); // Redirect to login page on failure
    }
  },
  home: async function (req, res) {
    try {
      // const cookies = req.cookies;
      const cookies = req.cookies;
      console.log(" cookies out : ", cookies);

      if (!cookies.isLoggedIn) {
        // User is not logged in, redirect to login page
        return res.redirect("/home");
      }
      res.redirect("/dashboard");
    } catch (err) {
      console.error(err);
      res.redirect("/home"); // Redirect to login page on failure to render the authentication file
    }
  },
};
