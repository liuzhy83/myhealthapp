var express = require('express');
var logger = require('../common/logger');
var router = express.Router();
var models = require('../models');
var persistence = require('../persistence');
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        'title': '测试首页'
    });
});

router.get('/ggys', function(req, res, next) {

});

router.get('/myh', function(req, res, next) {

});

module.exports = router;
