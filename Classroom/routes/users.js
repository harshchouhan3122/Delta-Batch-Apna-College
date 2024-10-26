const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/:id", (req, res) => {
    res.send("POST method of users.");
});

router.get("/:id", (req, res) => {
    res.send("GET method of users.");
});

router.put("/:id", (req, res) => {
    res.send("PUT method of users.");
});

router.delete("/:id", (req, res) => {
    res.send("DELETE method of users.");
});

module.exports = router;