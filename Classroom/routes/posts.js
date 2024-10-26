const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/:id", (req, res) => {
    res.send("POST method of posts.");
});

router.get("/:id", (req, res) => {
    res.send("GET method of posts.");
});

router.put("/:id", (req, res) => {
    res.send("PUT method of posts.");
});

router.delete("/:id", (req, res) => {
    res.send("DELETE method of posts.");
});

module.exports = router;