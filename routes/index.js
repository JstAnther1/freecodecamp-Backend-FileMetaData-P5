var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();

router.post('/upload',upload.single('fileName'), function(req, res, next) {
  var x = {
    "File Name": req.file.originalname,
    "Size": req.file.size
  };
  res.json(x);
});

module.exports = router;