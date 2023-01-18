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
      // this is just a object we send back to the front as confirmation. Don't know if we need it.
      return res.status(201).json({ instance: sportMeetBiz });

    // sportMeetBiz.save(function (err) {
    //     if (err) {
    //         return next(err);
    //     }
    //     res.send('Details Have Been Saved successfully')
    // })
};


