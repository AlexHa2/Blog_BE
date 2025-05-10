var express = require('express');
var router = express.Router();

const blogsController = require('../app/controllers/BlogsController');

router.get('/', blogsController.index);

module.exports = router;
