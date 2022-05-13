const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axio = require("axios");
const apis = require("./apis.js");

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

app.get("/names", apis.getJSON);

app.listen(4000, () => {
    console.log("Listening on 4000");
}); 