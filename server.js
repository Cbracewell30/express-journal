const express = require('express');
const { notes } = require("./develop/db/db.json");
const PORT = process.env.PORT || 3001;
const app = express();


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  app.get("/note", (req, res) => {
    res.json(notes);
});
