const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Pet name is required!'],
        minLength: [3, 'Name must be atleast 3 characters long!']
    },
    type:{
        type:String,
        required: [true, 'Type is required!'],
        minLength:[3,'Type must be 3 characters long!']
    },
    description:{
        type:String,
        required:[true,'description is required!'],
        minLength:[3,'description must be 3 characters long!']
    },
    skillOne:{
        type:String
    },
    skillTwo:{
        type:String
    },
    skillThree:{
        type:String
    },
},{ timestamps: true});

const Pet = mongoose.model('Pet',petSchema);

module.exports = Pet;