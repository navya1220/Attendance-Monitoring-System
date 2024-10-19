const TeacherModel = require('../models/Teacher');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken'); 
const registerTeacher = async (req, res) => {
  try {
    const { name, email, password, subject } = req.body;
    const existingTeacher = await TeacherModel.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher already exists' });
    }

    const newTeacher = new TeacherModel({ name, email, password, subject });
    await newTeacher.save();

    res.status(201).json({ message: 'Teacher registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};  

const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    

    const teacher = await TeacherModel.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: 'Teacher not found' });
    }
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: teacher._id, email: teacher.email }, 'secretKey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Teacher logged in successfully', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { registerTeacher, loginTeacher };
