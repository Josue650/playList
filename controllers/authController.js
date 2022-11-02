///////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
/// /////////////////////////////////////
// Import Dependencies
/// /////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

/// //////////////////////////////////////
// Create Route
/// //////////////////////////////////////
const router = express.Router()

/// //////////////////////////////////////
// Routes
/// //////////////////////////////////////

// The SignUp Routes (Get => form, post => submit form)
router.get('/signup', (req, res) => {
  res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    )
    // create the New user
    User.create(req.body)
      .then((user) => {
        // redirect to login page
        res.redirect('/user/login')
      })
      .catch((error) => {
        // send error as json
        console.log(error)
        res.json({ error })
      })
  })


// The login Routes (Get => form, post => submit form)
router.get('/login', (req, res) => {
  res.render('user/LogIn.jsx')
})

router.post('/login', async (req, res) => {
    // get the data from the request body
    const { username, password } = req.body
    // search for the user
    User.findOne({ username })
      .then(async (user) => {
        // check if user exists
        if (user) {
          // compare password
          const result = await bcrypt.compare(password, user.password)
          if (result) {
            // store some properties in the session object
            req.session.username = username
            req.session.loggedIn = true
            // redirect to playlist page if successful
            res.redirect('/playlists')
          } else {
            // error if password doesn't match
            res.json({ error: "password doesn't match" })
          }
        } else {
          // send error if user doesn't exist
          res.json({ error: "user doesn't exist" })
        }
      })
      .catch((error) => {
        // send error as json
        console.log(error)
        res.json({ error })
      })
  })

router.get('/logout', (req, res) => {
  // destroy session and redirect to main page
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
      res.status(500).json(err)
    } else {
      res.redirect('/')
    }
  })
})

/// ///////////////////////////////////////
// Export the Router
/// ///////////////////////////////////////
module.exports = router

// login
// POST
// Sending data to the server (req.body)
// sending a username & password
// Lookup the user in the db ---- Mongoose Method .findOne({ username: req.body.username })
// compare the req.body.password or credentials to the pass/cred of the foundUser
// if they match
// ---authenticate the user

// signup
// POST
// sending a username & password ...more data

// login View Route
// GET

// signup view route
// GET


// logout
// GET
