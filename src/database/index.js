const mongoose = require('mongoose')
const { DATABASE } = require('../config')

mongoose.connect(DATABASE, () => {
    console.log('Mongoo! Here we Go');
  });