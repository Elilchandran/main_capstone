const express = require('express');
const cors = require('cors');
const app = express();
const Student = require("./mongo.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// After the line "app.use(cors());", add the following line to increase the timeout:
app.use(express.json({ limit: "10mb" }));


app.get("/", cors(), (req, res) => {
  // Handle GET request if needed
});

app.post("/", async (req, res) => {
  const { name, topic, submittedOn } = req.body;
  const data = {
    name: name,
    topic: topic,
    submittedOn: new Date(submittedOn),
  };

  try {
    const student = new Student(data);
    await student.save();
    res.sendStatus(200);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.sendStatus(500);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
