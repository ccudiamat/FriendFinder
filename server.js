var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(bodyParser.json({ type: "application/*+json" }))

app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))

app.use(bodyParser.text({ type: "text/html" }))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: http://localhost:" + PORT);
  });
  