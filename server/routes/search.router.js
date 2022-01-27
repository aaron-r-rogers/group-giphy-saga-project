require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: req.query.q,
            limit: 6
        }
    })
    .then((apiRes) => {
        res.send(apiRes.data);
    })
    .catch((err) => {
        console.error('GIPHY req failed', err);
        res.sendStatus(500);
    })
});

module.exports = router;