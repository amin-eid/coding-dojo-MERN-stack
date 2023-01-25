const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    name: { type: String ,
        required:[true,"name is required"],
        minlength:[3,'Name should be at least 3 characters'],
},
    position: { type: String ,
        required:[true,"position is required"],
        minlength:[3,'position should be at least 3 characters'],
},

}, { timestamps: true });
module.exports.Team = mongoose.model('Team', TeamSchema);