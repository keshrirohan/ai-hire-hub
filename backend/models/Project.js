const mongoose = require("mongoose");

const milestoneSchema = new mongoose.Schema({
  title: String,
  assignedTo: {
    type: String,
    default: "Not Assigned"
  },
  status: {
    type: String,
    default: "Pending"
  }
});

const projectSchema = new mongoose.Schema({
  title: String,
  idea: String,
  milestones: [milestoneSchema]
});

module.exports = mongoose.model("Project", projectSchema);