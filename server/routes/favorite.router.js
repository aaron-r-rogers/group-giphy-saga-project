const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  // res.sendStatus(200);
  //Need to make SQL code here
  const queryText = `
  SELECT * FROM "image";
  `
  pool
  .query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log(`Error on GET db query /favorites`, error);
    res.sendStatus(500);
  });

});

// add a new favorite
router.post('/', (req, res) => {
  console.log("POST favorite req.body.data:",req.body.data);
  const queryText = `
  INSERT INTO "image" ("url")
  VALUES ($1);`
  const queryParams=[req.body.data];

  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on POST to db /favorites`, error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;


// axios({
//   method: 'GET',
//   url: 'https://api.giphy.com/v1/gifs/random',
//   params: {
//     api_key: process.env.GIPHY_API_KEY
//   }
// })