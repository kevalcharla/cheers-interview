const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Task", taskSchema);
