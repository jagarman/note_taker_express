
// LOAD DATA

var noteData = require("../db/db");

// ROUTING

module.exports = function(app) {
  // API GET Requests

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  // API POST Requests

  app.post("/api/notes", function(req, res) {
    console.log(req.body)
  });
