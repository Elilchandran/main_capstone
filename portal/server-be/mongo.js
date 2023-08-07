const mongoose = require('mongoose');

const mongoDBUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/task_list";

// Rest of the code remains the same


mongoose.connect(mongoDBUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    submittedOn: {
      type: Date,
      required: true,
    },
  });
  

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;