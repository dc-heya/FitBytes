// Import the UserDiseases model
const UserDiseases = require('../models/UserDiseases');

// Define controller methods
const userDiseasesController = {
  // Function to create a new UserDiseases document
  createUserDiseases: function(req, res) {
    const { userId, username, age, gender, currentweight, height, veg, goalweight, goalmonths, exercisefreq } = req.body;
    const newUserDiseases = new UserDiseases({
      userId,
      username,
      age,
      gender,
      currentweight,
      height,
      veg,
      goalweight,
      goalmonths,
      exercisefreq
    });

    newUserDiseases.save()
      .then(userDiseases => res.status(201).json(userDiseases))
      .catch(err => res.status(500).json({ error: err.message }));
  },

  // Function to retrieve UserDiseases data by ID
  getUserDiseasesById: function(req, res) {
    const userDiseasesId = req.params.id;
    UserDiseases.findById(userDiseasesId)
      .then(userDiseases => {
        if (!userDiseases) {
          return res.status(404).json({ error: 'UserDiseases not found' });
        }
        res.json(userDiseases);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  },

  // Function to update UserDiseases data
  updateUserDiseases: function(req, res) {
    const userDiseasesId = req.params.id;
    const updatedData = req.body;
    UserDiseases.findByIdAndUpdate(userDiseasesId, updatedData, { new: true })
      .then(updatedUserDiseases => {
        if (!updatedUserDiseases) {
          return res.status(404).json({ error: 'UserDiseases not found' });
        }
        res.json(updatedUserDiseases);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  },

  // Function to delete UserDiseases data
  deleteUserDiseases: function(req, res) {
    const userDiseasesId = req.params.id;
    UserDiseases.findByIdAndDelete(userDiseasesId)
      .then(deletedUserDiseases => {
        if (!deletedUserDiseases) {
          return res.status(404).json({ error: 'UserDiseases not found' });
        }
        res.json({ message: 'UserDiseases deleted successfully' });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  }
};

// Export the controller object
module.exports = userDiseasesController;
