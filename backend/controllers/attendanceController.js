const AttendanceModel = require('../models/Attendance');

const markAttendance = async (req, res) => {
  try {
    const { studentId, date, status, markedBy } = req.body;
    const attendance = await AttendanceModel.create({ studentId, date, status, markedBy });
    res.status(201).json({ status: "Attendance marked", attendance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const records = await AttendanceModel.find({ studentId });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { markAttendance, getAttendance };
