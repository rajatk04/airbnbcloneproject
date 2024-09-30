const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
  .route("/signup")
  //Signup
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router.route("/login")
  //Login
  .get(userController.renderLoginForm)
  .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.login);

//Note: Passport.authenticate= use for matching login credential with signup.

//Logout

router.get("/logout", userController.logout);

module.exports = router;