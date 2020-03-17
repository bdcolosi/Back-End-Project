const express = require('express'),
router = express.Router(),
imageModel = require('../models/imageModel');
likesModel = require('../models/likesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const resultData = await imageModel.getAllPictures();
  const user_id = req.session.user_id; 
  const profileData = await imageModel.getProfilePicture(user_id);
  console.log(req.session.name);
  res.render('template', {
    locals: {
      title: 'Film Data',
      user: req.session.user_id,
      resultData: resultData,
      profileData: profileData,
      is_logged_in: req.session.is_logged_in,
      name: req.session.name
    },
    partials: {
      partial: 'partial-index'
    }
  })
});

/* POST liked image */
router.post('/', async (req, res) => {
  const {name} = req.body;
  const user_id = req.session.user_id;  
  console.log("this is the name value", name);
  const user = new likesModel(null, name, user_id);
  if (user_id != null) {
  user.save();
  res.redirect('/');
  } else {
    res.redirect('/users/signup')
  }
});

module.exports = router;