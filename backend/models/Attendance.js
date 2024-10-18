const mongoose = require('mongoose')

const AttendanceSchema = new mongoose.Schema({
   studentId: {type: mongoose.Schema.Types.ObjectId, ref:'Student', required: true},
   date: {type: Date, required:true},
   status: {type: String, enum: ['present', 'absent'], required: true},
   markedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true}
});

const AttendanceModel = mongoose.model('attendances', AttendanceSchema);

module.exports = AttendanceModel;