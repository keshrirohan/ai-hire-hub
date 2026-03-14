const express = require("express");

const router = express.Router();

const { generateMilestones } = require("../controllers/aiController");

router.post("/generate", generateMilestones);

module.exports = router;
