const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  Disease: {
    type: String,
    required: true
  },
  Carbs: {
    type: Number,
    required: true
  },
  TotalFat: {
    type: Number,
    required: true
  },
  SaturatedFat: {
    type: Number,
    required: true
  },
  Protein: {
    type: Number,
    required: true
  },
  Fiber: {
    type: Number,
    required: true
  },
  Cholesterol: {
    type: Number,
    required: true
  },
  Sodium: {
    type: Number,
    required: true
  },
  Sugar: {
    type: Number,
    required: true
  },
  Potassium: {
    type: Number,
    required: true
  },
  Magnesium: {
    type: Number,
    required: true
  },
  Phosphorus: {
    type: Number,
    required: true
  },
  VitaminC: {
    type: Number,
    required: true
  },
  VitaminA: {
    type: Number,
    required: true
  },
  Calcium: {
    type: Number,
    required: true
  },
  Iron: {
    type: Number,
    required: true
  },
  Zinc: {
    type: Number,
    required: true
  },
  VitaminE: {
    type: Number,
    required: true
  },
  VitaminK: {
    type: Number,
    required: true
  }
});

const DiseaseModel = mongoose.model('final_diseases', diseaseSchema);

module.exports = DiseaseModel;
