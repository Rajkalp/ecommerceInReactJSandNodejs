const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    
},{timestamps: true}); // timestamps stores the time of every entry in database

module.exports = mongoose.model("Category", categorySchema);