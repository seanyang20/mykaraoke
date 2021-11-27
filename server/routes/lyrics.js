const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");
// const path = require("path");


let lyricsData = [];

const getLyricsData = () => {
    console.log("getLyricsData is working");
    fs.readFile("./data/lyrics.json", (err, data) => {
        
      if (err) {
        console.log(err);
        return;
        
      }
      lyricsData = JSON.parse(data);
 
    });
  
  };

  
getLyricsData();


router.get("/lyrics", (req, res) => {               
    console.log('GET method called');
    res.json(lyricsData);
 
    })

module.exports = router;