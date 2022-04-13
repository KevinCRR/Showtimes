var express = require("express");
const res = require("express/lib/response");
var app = express();
var fs = require("fs");
var rawdata = fs.readFileSync("data/showtimes.json");
var data = JSON.parse(rawdata);
// var parse = require("csv-parse/lib/sync");
var cors = require("cors");

app.get("/", cors(), function (req, res) {
  (async function () {
    // const fileContent = await fs.readFile(__dirname + "/data/grades.csv");
    // const records = parse(fileContent, { columns: true });
    console.log(data);
    res.send(data);
  })();
});

var server = app.listen(3000, function () {});
