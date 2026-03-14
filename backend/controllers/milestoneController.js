const Project = require("../models/Project");

exports.assignFreelancer = async (req, res) => {

  try {

    const { projectId, freelancer } = req.body;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // assign freelancer to all milestones
    project.milestones = project.milestones.map(m => ({
      ...m,
      assignedTo: freelancer
    }));

    await project.save();

    res.json(project);

  } catch (error) {

    console.log(error);

    res.status(500).json({ error: "Assignment failed" });

  }

};