const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for a Report
const schema = new Schema({
    patientInitials: {
        type: String,
        required: true
    },
    visitDate: {
        type: String
    },
    arrivalTime: {
        type: String
    },
    departureTime: {
        type: String
    },
    visitTimeLength: {
        type: String
    }
});

module.exports = mongoose.model('Report', schema);
