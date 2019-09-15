const mongoose = require('mongoose')
const validator = require('validator')

//define the model
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain password');
            }
        }
    }, 
    password: {
        type: String,
        minlength: 7, 
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
        // custom validator
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            } 
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    }
})

module.exports = User