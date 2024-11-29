const express = require("express");

const app = express();

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// check list route
app.get("/", require("./routes/checklist.router"));

// redirecting to Dashboard
app.all("*", (req, res) => res.redirect("/"));

module.exports = app;
