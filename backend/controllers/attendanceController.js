const AttendanceModel = require('../models/Attendance');

// Mark attendance for a student
const markAttendance = async (req, res) => {
  try {
      console.log("Request Body:", req.body); // Log the incoming request
      const { studentId, date, status, markedBy } = req.body;

      // Validate incoming data
      if (!studentId || !date || !status || !markedBy) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Create attendance record
      const attendance = await AttendanceModel.create({ studentId, date, status, markedBy });
      res.status(201).json({ status: "Attendance marked", attendance });
  } catch (err) {
      console.error("Error marking attendance:", err);
      res.status(500).json({ message: "Internal Server Error", error: err.message }); // Include the error message
  }
};


// Retrieve attendance records for a student
const getAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Validate incoming parameter
    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }

    // Fetch attendance records from the database
    const records = await AttendanceModel.find({ studentId });
    if (!records.length) {
      return res.status(404).json({ message: "No attendance records found for this student" });
    }

    res.json(records);
  } catch (err) {
    // Log the error to console for debugging
    console.error("Error retrieving attendance:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { markAttendance, getAttendance };
