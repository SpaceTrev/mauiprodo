const express = require("express");
const bodyParser = require("body-parser");
const sslRedirect = require("heroku-ssl-redirect")

const database = require('./config/firebase');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(sslRedirect());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./routes/fileRoutes')(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});