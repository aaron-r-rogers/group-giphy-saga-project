const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `
    SELECT "category"."id", "category"."name", 
      ARRAY_AGG("image_id") AS "image_id_arr"
    FROM "category_junction"
    RIGHT JOIN "category"
      ON "category"."id" = "category_junction"."category_id"
    GROUP BY "category"."id", "category"."name";
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on GET db query /category`, error);
      res.sendStatus(500);
    });
});

// add an image to a category
router.post('/', (req, res) => {
  console.log("POST category req.body.data:", req.body);
  const queryText = `
  INSERT INTO "category_junction" ("category_id", "image_id")
  VALUES ($1, $2);`
  const queryParams=[
    req.body.category_id, 
    req.body.image_id
  ];

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

// add an image to a category
router.delete('/:category_id/:image_id', (req, res) => {
  console.log("DELETE category req.body:", req.params);
  const queryText = `
    DELETE FROM "category_junction" 
    WHERE "category_id" = $1 AND "image_id" = $2;`
  const queryParams=[
    req.params.category_id, 
    req.params.image_id
  ];

  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error on DELETE from /category`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
