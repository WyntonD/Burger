var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var method = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8070;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
});

