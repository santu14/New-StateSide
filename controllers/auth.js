const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/jwt");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//  ------------------------------------------ Sign Up ------------------------------------------------------
exports.signup = (req, res) => {
  let {
    firstName,
    lastName,
    email,
    password,
    password_confirmation,
  } = req.body;

  // ----------------- Validation ----------------------
  let errors = [];

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !password_confirmation
  ) {
    errors.push({ error: "Please enter all required fields." });
  } else {
    if (!emailRegexp.test(email)) {
      errors.push({ email: "Invalid email address." });
    }
    if (password.length < 6) {
      errors.push({ password: "Password must be atleast 6 characters long." });
    }
    if (password != password_confirmation) {
      errors.push({ passwordConfirm: "Password did not match." });
    }
  }
  if (errors.length > 0) {
    return res.json({ errors: errors });
  } else {
    User.findOne({ email: email })
      .then((user) => {
        // Check if user exists
        if (user) {
          return res.json({ errors: [{ user: "email already exists" }] });
        } else {
          const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          });
          // Encrypt password
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
              if (err) throw err;
              user.password = hash;
              user
                .save()
                .then((response) => {
                  res.status(200).json({
                    success: true,
                    result: response,
                  });
                })
                .catch((err) => {
                  res.status(500).json({
                    errors: [{ error: err }],
                  });
                });
            });
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          errors: [{ error: "Something went wrong" }],
        });
      });
  }
};

//  ------------------------------------------ Sign In ------------------------------------------------------

exports.signin = (req, res) => {
  let { email, password } = req.body;

  // ----------------- Validation ----------------------
  let errors = [];
  if (!email || !password) {
    errors.push({ error: "Please enter all required fields" });
  } else if (email && password) {
    if (!emailRegexp.test(email)) {
      errors.push({ email: "Invalid email address." });
    }
  }

  if (errors.length > 0) {
    return res.json({ errors: errors });
  } else {
    User.findOne({ email: email })
      .then((user) => {
        // Check if user exists
        if (!user) {
          return res.json({
            errors: [{ error: "Wrong email or password." }],
          });
        } else {
          // If user exists compare encrypted passwords
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (!isMatch) {
                return res.json({
                  errors: [{ error: "Wrong email or password." }],
                });
              }
              // If they match we create our access token and verify it
              let access_token = createJWT(user.email, user._id, "1h");
              // Create cookie for token storage
              res.cookie("token", access_token, { httpOnly: true });
              res.cookie("user", user._id);

              jwt.verify(
                access_token,
                process.env.SECRETKEY,
                (err, decoded) => {
                  if (err) {
                    res.status(500).json({ errors: err });
                  }
                  if (decoded) {
                    return res.status(200).json({
                      success: true,
                      token: access_token,
                      message: user,
                    });
                  }
                }
              );
            })
            .catch((err) => {
              res.status(500).json({ errors: "Internal error with sign in" });
            });
        }
      })
      .catch((err) => {
        res.status(500).json({ errors: err });
      });
  }
};

//  ------------------------------------------ Sign Out ------------------------------------------------------
exports.signout = (req, res) => {
  res
    .cookie("token", " ", {
      httpOnly: true,
      expires: new Date(0),
    })
    .cookie("user", " ", {
      expires: new Date(0),
    })
    .send();

   
};

//  ------------------------------------------ Check if user is authorized ------------------------------------------------------
exports.checkauth = (req, res) => {
  try {
    const token = req.cookies.token;
    const user = req.cookies.user
    if (!token) return res.json(false);

    const verify = jwt.verify(token, process.env.SECRETKEY);

    if (verify) {
      return res.json(true);
    } else {
      return res.json(false);
    }
  } catch (err) {
    return res.json(false);
  }
};
