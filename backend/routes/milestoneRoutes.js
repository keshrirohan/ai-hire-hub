const express = require("express");

const router = express.Router();

const { assignFreelancer } = require("../controllers/milestoneController");

router.post("/assign", assignFreelancer);

module.exports = router;
