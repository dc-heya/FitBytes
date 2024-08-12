const db = require("../models")
const moment = require("moment")

module.exports = {
    // User controllers
    updateUserWeight: function(req, res) {
        db.User
          .findById(req.body.userId) // Assuming user ID is available in the request
          .then(dbModel => {
            if (!dbModel) {
              return res.status(404).json({ success: false, msg: 'User not found.' });
            }
            dbModel.weight = req.body.weight; // Assuming the weight is sent in the request body
            user.save()
              .then(updatedUser => {
                res.status(200).json(updatedUser);
              })
              .catch(err => {
                res.status(500).json(err);
              });
          })
          .catch(err => {
            res.status(422).json(err);
          });
      },
    findUserById: function(req, res) {
        db.User
        .findByIdAndUpdate({_id: req.params.id})
        .select("-__v -password")
        .populate({
            path: "days",
            options: {
                sort: {
                    date: -1
                }
            },
            select: "-__v",
            populate: {
                path: "exercises",
                model: "Exercise",
                select: "-__v"
            }
        })
        .then((userModel) => res.json(userModel))
        .catch(err => res.status(422).json(err));
    },

    createUser: function(req, res) {
        console.log(req.body);
        db.User
        .create(req.body)
        .then(userModel => res.json(userModel))
        .catch(err => res.status(422).json(err));
    },

    updateUser: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
    removeUser: function(req, res) {
        db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}