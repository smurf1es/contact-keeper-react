const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in');
});

// @route   POST api/auth
// @desc    Log in a user & get token
// @access  Private
router.post('/', (req, res) => {
  res.send('Login user');
});

module.exports = router;
