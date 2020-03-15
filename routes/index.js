const express = require('express'),
router = express.Router(),
imageModel = require('../models/imageModel');
likesModel = require('../models/likesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const resultData = await imageModel.getAllPictures();
  res.render('template', {
    locals: {
      title: 'Film Data',
      resultData: resultData,
      is_logged_in: req.session.is_logged_in,
      name: req.session.name
    },
    partials: {
      partial: 'partial-index'
    }
  })
});

router.post('/', async (req, res) => {
  const {name} = req.body;
  const user_id = req.session.user_id;  
  console.log("this is the name value", name);
  const user = new likesModel(null, name, user_id);
  user.save();
  res.redirect('/');
});

module.exports = router;
