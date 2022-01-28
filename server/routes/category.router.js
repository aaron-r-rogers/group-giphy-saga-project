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

module.exports = router;
