const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String,
        unique:true
    },
    mobile: {
        type:String
    },
    dob: {
        type:String
    },
    workExp: {
        type:String
    },
    resumeTitle: {
        type:String
    },
    currLoc: {
        type:String
    },
    postalAdd: {
        type:String
    },
    currEmp: {
        type:String
    },
    currDes: {
        type:String
    }
} , {
    timestamps:true
});

const Candidate = mongoose.model('Candidate' , candidateSchema);

module.exports = Candidate;