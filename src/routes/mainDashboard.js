require('dotenv').config();

const router = require('express').Router();
const axios = require('axios');

router.get('/', async (request, response) => {
  const data = await axios.get(process.env.API_ENDPOINT);
  response.render('mainDashboard', { data: data.data });
});

module.exports = router;
