const express = require('express');
const { registerStudent, loginStudent, getAllStudents } = require('../controllers/studentController');
const router = express.Router();

router.post('/register', registerStudent);
router.post('/login', loginStudent);

router.get('/', getAllStudents);

module.exports = router;
