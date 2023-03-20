const express = require("express");
const router = express.Router();
const db = require("../db/db.connect").pool;


router.get("/", (req, res) => {
    res.status(200).send("Hello from user");
});

module.exports = router;