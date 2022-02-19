const router = require("express").Router();
const notes = require("../db/db.json");
const fs = require ("fs");
const { request } = require("http");

router.get("/api/notes", (req, res) => {
    //read the data file
    notes = JSON.parse(fs.readFileSync("./db/db.json")) || []
    
    console.log("getroute", notes)
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    //creating new note object
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        id : Math.floor(Math.random()* 100)
    }
    // pushing the new info in the data
    notes.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err){
        if(err){
           throw err 
        }
    })

    console.log("postroute", notes)
    res.JSON(notes);
});

// deleting note
router.delete("/api/notes/:id", (req, res) => {
  var oldNotes = notes.filter(note => note.id != req.params.id)
  notes = oldNotes
  
    // pushing the new info in the data
    notes.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err){
        if(err){
           throw err 
        }
    })

    console.log("deleteroute", notes)
    res.JSON(notes);
});
  module.exports = router;