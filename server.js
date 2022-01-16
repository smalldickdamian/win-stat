const express = require("express");
const app = express();

const os = require("os");

const { name, version } = require("./package.json");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.status(200).render(__dirname + "/views/home.ejs", {
        os,
        name,
        version,
        process
    });
});

app.listen(3030, () => console.log("Listening."));
