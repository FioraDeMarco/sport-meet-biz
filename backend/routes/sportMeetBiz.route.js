const express = require('express');
const router = express.Router();
let Profile = require('../models/sportMeetBiz.model')

console.log('Hello world of pain')
// a simple test url to check that all of our files are communicating correctly.

// router.get('/test', sportMeetBizController.test);
router.route('/').get((req, res) => {
    Profile.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('ERROR ON sportMeetBiz.rout.js line116: ', error))
})

router.route('/add').post((req,res) => {
    const username = req.body.firstName;
    const newProfile = new Profile({username})

    newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(error => res.status(400).json('Error: '+ error))
})
// router.post('/submit',sportMeetBizController.sportMeetBizCreate);

console.log('Hello world of pain3')
module.exports = router;
