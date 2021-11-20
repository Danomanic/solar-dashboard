const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const mainDashboard = require('./routes/mainDashboard');

const port = process.env.PORT || 8080;

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', mainDashboard);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
