const router = require("express").Router();
const path = require('path');
const express = require('express');


// root route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

// exercise route
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

// stats route
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

// catch all route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

module.exports = router;