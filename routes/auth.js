const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User.js');
// const UserDiseases = require('../models/UserDiseases.js');

router.post('/disease/:userId', (req, res) => {
  console.log('disease form  route reached');
  
  // Extract the user ID from the request parameters
  const userId = req.params.userId;
  const user=req.body
  User.findByIdAndUpdate(userId, {
    age: user.age,
    height: user.height,
    currentweight:user.currentweight,
    veg:user.veg,
    goalweight:user.goalweight,
    goalmonths:user.goalmonths,
    exercisefreq:user.exercisefreq,
    diseases:user.diseases
  }, (err, user) => {
    if (err) {
      return res.json({
        success: false,
        msg: 'Error updating user.'
      });
    } else if (!user) {
      return res.json({
        success: false,
        msg: 'User not found.'
      });
    } else {
      res.json({
        success: true,
        msg: 'User updated successfully.'
      });
    }
  });
  // Find the user by ID and update its properties

});

router.post('/update/:userId', (req, res) => {
  console.log('update route reached');
  
  // Extract the user ID from the request parameters
  const userId = req.params.userId;

  // Find the user by ID and update its properties
  User.findByIdAndUpdate(userId, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    weight: req.body.weight,
    height: req.body.height,
    age: req.body.age,
    state: req.body.state,
    city: req.body.city,
    zipCode: req.body.zipCode,
  }, (err, user) => {
    if (err) {
      return res.json({
        success: false,
        msg: 'Error updating user.'
      });
    } else if (!user) {
      return res.json({
        success: false,
        msg: 'User not found.'
      });
    } else {
      res.json({
        success: true,
        msg: 'User updated successfully.'
      });
    }
  });
});

router.post('/register', (req, res) => {

  console.log('register route reached');

  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: 'Please pass username and password.'
    });
  } else {

    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode,
      email: req.body.email,
      gender: req.body.gender
    });

    newUser.save(err => {
        if (err) {
          return res.json({
            success: false,
            msg: 'Username already exists.'
          });
        } else {
          res.json({
            success: true,
            msg: 'Successful created new user.'
          });
        };
      } // end newUser.save

    )}; // end else
});

router.post('/login', (req, res) => {
  User.findOne({
      username: req.body.username
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            const token = jwt.sign(user.toJSON(), settings.secret);
            res.json({
              success: true,
              token: 'JWT ' + token,
              userId: user._id
            });
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    }
  );
});

module.exports = router;