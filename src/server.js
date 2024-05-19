require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
