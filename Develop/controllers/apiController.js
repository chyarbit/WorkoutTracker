const Exercise = require("../models/exerciseModel");
const Workout = require("../models/workoutModel");
const router = require("express").Router();

//getLastWorkout route
router.get("/api/workouts", (req, res)=>{
    Workout.find({//do sort based on date and return last one by//
    .sort()})
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

})


//createWorkout route
router.post("/api/workouts",(req, res)=>{

})

//getWorkoutsInRange
router.get("/api/workouts/range",(req, res)=>{

})


module.exports = router