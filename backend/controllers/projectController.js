const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { title, idea, milestones } = req.body;

    const milestoneArray = milestones
      .split("\n")
      .filter((m) => m.trim() !== "")
      .map((m) => ({
        title: m,
      }));

    const project = new Project({
      title,
      idea,
      milestones: milestoneArray,
    });

    await project.save();

    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Project save failed" });
  }
};

const getProjects = async (req, res) => {
  const projects = await Project.find();

  res.json(projects);
};

module.exports = {
  createProject,
  getProjects,
};
