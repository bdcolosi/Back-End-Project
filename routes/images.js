const express = require('express'),
router = express.Router(),
imageModel = require('../models/imageModel');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const resultData = await imageModel.getAllPictures();
  res.render('template', {
    locals: {
      title: 'Film Data',
      resultData: resultData,
      is_logged_in: req.session.is_logged_in
    },
    partials: {
      partial: 'partial-index'
    }
  })
});

router.get("/:picture_id", async function(req, res, next) {
  const { r_id } = req.params;
  const data = await PictureReviewModel.getPicturesById(r_id);
  const reviewList = await PictureReviewModel.getCommentsByImageId(r_id);

  res.render("template", {
    locals: {
      title: data[0].name,
      data: data,
      reviewList: reviewList
    },
    partials: {
      partial: "partial-single-img"
    }
  });
});


router.get("/:picture_id", async function(req, res, next) {
  const { r_id } = req.params;
  const data = await ImageModel.getPicturesById(r_id);
  const reviewList = await ImageModel.getCommentsByImageId(r_id);

  res.render("template", {
    locals: {
      title: data[0].name,
      data: data,
      reviewList: reviewList
    },
    partials: {
      partial: "partial-single-img"
    }
  });
});

router.post("/", async (req, res) => {
  const { name, images_id, comment } = req.body;
  const idAsInt = parseInt(images_id);
  const postData = await PictureReviewModel.addComment(
    name, 
    idAsInt,
    images_id,
    comment
  );
  console.log("HELLO!", postData);

  res.sendStatus(200);
});

module.exports = router;