const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create to Schema
const TodoSchema = new Schema ({
    name: {type: String, required: true, max: 100},
});

// Export the model 
module.exports = mongoose.model('Todo', TodoSchema);