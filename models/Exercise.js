const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercise: { type: String, required: true },
    duration: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;