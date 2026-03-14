const express = require("express");

const router = express.Router();

const { checkFreelancer } = require("../controllers/trustController");

router.post("/check", checkFreelancer);

module.exports = router;
