var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

//路由请求 根
router.get('/', ctrlMain.index);


module.exports = router;
