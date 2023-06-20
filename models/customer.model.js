//id,name, address, phoneNumber,email
//name-string,required
//address-string,required
//phoneNumber-String,required,unique
//email-string,required,unique
//password-string,required

import mongoose from "mongoose";
import bcrypt from 'bcrypt';

// define schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    address: {
        type: String,
        required:  [true, 'please add an address']
    },
    phoneNumber: {
        type: String,
        required:  [true, 'please add a Phone number'],
        minLength: 14,
        maxLength: 14
    },
    email: {
        type: String,
        required:  [true, 'please add a name'],
        unique: true
    },
    password: {
        type: String,
        required:  [true, 'please add a name'],
        minLength: 8,
        maxLength: 32,
        pattern: [/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/, 'Your password must include numbers and letters']
    }
}, {timestamps: true})

//when ever a user is created, hash their password
customerSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

// define the model
const customerModel = mongoose.model('customer', customerSchema )
//export the model
export default customerModel;