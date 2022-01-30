const mongoose = require('mongoose');
const moment = require('moment');

const userSchema = mongoose.Schema({
    name: String,
    last_name: String,
    email: String, 
    date: Date,
});

userSchema.methods.setBody = function({name, last_name, email, date}){
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    
    if (typeof date === 'string') {
        this.date = moment(date, 'YYYY-MM-DD hh:mm:ss').toDate();
      } else {
        this.date = date;
      }
};



const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

