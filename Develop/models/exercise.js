const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
      },
    distance: {
        type: Number,
      },
    duration: {
        type: Number,
      },
    weights: {
        type: Number,
      },
    sets: {
        type: Number,
      },
    reps: {
        type: Number,
      },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
