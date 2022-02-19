const router = require("express").Router();
const { notes } = require("../develop/animals");

router.get("/db", (req, res) => {
    res.json(notes);
});


  module.exports = router;