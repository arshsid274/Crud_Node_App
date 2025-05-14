// const { text } = require('express');
// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//     name:{type: String, required: true},
//     email:{type: String, required: true},
//     number:{type: Number, required: true},
//     text:{type: String, required: true}, 
//     createdAt:{type: Date, required:true ,default: Date.now},
// });
// mongoose.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Userdata', userSchema);
