const StudentModel = require('../models/Student');
const bcrypt = require('bcryptjs');

// Register a new student
const registerStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingStudent = await StudentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create new student and hash the password
    const student = new StudentModel({ name, email, password });
    await student.save();
    
    res.status(201).json({ message: "Student registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Student login
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if student exists
    const student = await StudentModel.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ status: "Success", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();  // Fetch all students
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { registerStudent, loginStudent , getAllStudents};