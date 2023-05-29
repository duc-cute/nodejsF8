/** @format */
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const app = express();
const port = 3000;

//config folder static
app.use(express.static(path.join(__dirname, "public")));

//Template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//HTTPs Logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
