const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/r/:redditName", (req, res) => {
    const {redditName} = req.params;
    res.render("reddit", {redditName});
})

app.get("/cats", (req, res) => {
    const cats = ['miua', 'nekochan', 'gatuna', 'pepe', 'cuchi'];
    res.render("cats", {catLists: cats});
})

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render("random", {num});
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
