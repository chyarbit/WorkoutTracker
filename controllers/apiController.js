const Exercise = require("../models/exerciseModel");
const Workout = require("../models/workoutModel");
const router = require("express").Router();

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
router.put("/api/workouts/:id",({body,params}, res)=>{
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {exercises:body}
        },
        {
            new: true
        }
        )
    .then(workout => {
    res.json(workout);
    })
    .catch(err => {
    res.json(err);
    });   
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