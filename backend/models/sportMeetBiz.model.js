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
  // Assign a function to the "methods" object of our sportMeetBizSchema through schema options.
  // By following this approach, there is no need to create a separate TS type to define the type of the instance functions.
//   methods: {
//     findSimilarTypes(cb) {
//       return mongoose.model('sportMeetBiz').find({ type: this.type }, cb);
//     }
//   }
});

// Or, assign a function to the "methods" object of our sportMeetBizSchema
// sportMeetBizSchema.methods.findSimilarTypes = function(cb) {
//   return mongoose.model('sportMeetBiz').find({ type: this.type }, cb);
// };

module.exports = mongoose.model('sportMeetBiz', sportMeetBizSchema)