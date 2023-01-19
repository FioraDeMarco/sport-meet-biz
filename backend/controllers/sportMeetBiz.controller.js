const sportMeetBiz = require('../models/sportMeetBiz.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.sportMeetBizCreate = function (req, res) {


    let sportMeetBiz = new sportMeetBiz(
      {
          
       firstName: req.body.firstName,
       lastName:  req.body.lastName,
       dateOfBirth:  req.body.gender,
       sport:   req.body.sport,
       gender:  req.body.gender,
       location:  req.body.location,
       email:  req.body.email,
       team:  req.body.team,
       about:  req.body.about,

       }
    );

    try {
        await sportMeetBiz.save();
      } catch (err) {
        const error = new HttpError(
          "Signing up failed, please try again later.",
          500
        );
        return next(error);
      }
  
      return res.status(201).json({ instance: sportMeetBiz });

};


