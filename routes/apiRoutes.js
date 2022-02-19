const router = require("express").Router();
const notes = require("../db/db.json");
const fs = require (fs)

router.get("/api/notes", (req, res) => {
    notes = 
    res.json(notes);
});


  module.exports = router;