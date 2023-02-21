require("dotenv").config();
const express = require("express");
const consign = require("consign");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "DELETE, GET, POST, PUT, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

consign({ cwd: "api" })
    .then("conn")
    .then("models")
    .include("controllers")
    .then("routes")
    .into(app);

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server listening on port ${process.env.SERVER_PORT}`)
);
