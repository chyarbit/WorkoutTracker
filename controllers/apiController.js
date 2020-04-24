const Exercise = require("../models/exerciseModel");
const Workout = require("../models/workoutModel");
const router = require("./node_modules/express").Router();

//getLastWorkout route
router.get("/api/workouts", (req, res)=>{
    Workout.find({})
    .sort({ date: -1 })
    .then(workouts => {
    res.json(workouts);
    })
    .catch(err => {
    res.json(err);
    });
})

//addExercise
// 2 steps
// create exercise first using exercise model
// take that result (req.body) and update the workout model (req.params.id)based on the newly created exercise
// look at note taking activity with the 2 models- add comment or add note and then update the user who it belongs to (activity 15)
router.put("/api/workouts/:id",(req, res)=>{
    Exercise.create(req.body)
    Workout.updateOne({})
})

//createWorkout route
router.post("/api/workouts",(req, res)=>{
    Workout.create(req.body)
    .then(workout => {
    res.json(workout);
    })
    .catch(err => {
    res.json(err);
    });
})

//getWorkoutsInRange
router.get("/api/workouts/range",(req, res)=>{
    Workout.find({"created_on":{"$gte": req.start, "$lt": req.end}})
    .then(workouts => {
    res.json(workouts);
    })
    .catch(err => {
    res.json(err);
  });
})


module.exports = router