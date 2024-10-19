const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
   studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }, // This should be 'student'
   date: { type: Date, required: true },
   status: { type: String, enum: ['present', 'absent'], required: true },
   markedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true } // This should be 'teacher'
});

const AttendanceModel = mongoose.model('attendances', AttendanceSchema);

module.exports = AttendanceModel;
