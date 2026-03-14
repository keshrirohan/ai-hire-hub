const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const milestoneRoutes = require("./routes/milestoneRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

app.use("/api/projects", projectRoutes);
app.use("/api/milestones", milestoneRoutes);
const aiRoutes = require("./routes/aiRoutes");

app.use("/api/ai", aiRoutes);

app.use("/api/projects", projectRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
