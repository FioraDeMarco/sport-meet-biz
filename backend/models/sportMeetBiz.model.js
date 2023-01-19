const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportMeetBizSchema = new Schema({ 
    firstName:  {type: String},
    lastName:  {type: String},
    dateOfBirth:  {type: String},
    sport:  {type: String},
    gender:  {type: String},
    location:  {type: String},
    email:  {type: String},
    team:  {type: String},
    about:  {type: String},

});



module.exports = mongoose.model('sportMeetBiz', sportMeetBizSchema)