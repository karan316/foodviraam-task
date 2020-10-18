const express = require('express');
const app = express();

var cors = require('cors');
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT');
// });
app.use(cors());
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config");

const port = process.env.PORT || 4000;

const server = app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);

module.exports = server;