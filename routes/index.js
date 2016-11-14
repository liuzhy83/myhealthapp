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
    //手机号加密串
    var gor_enstr = req.params.gor_enstr;
    //0 未知 1男 2女
    var sex = req.params.sex;
    //yyyy-MM-dd类型
    var birthday = req.params.birthday;
    //partnerkey
    var partnerkey = req.params.partnerkey;
    //medicaldesc
    var medicaldesc = req.params.medicaldesc;
    //name  账户姓名
    var name = req.params.name;
    //访问高歌医生　
    res.redirect('http://ggtest.gorgonor.com/partner/jkzs/home?gor_enstr=' + gor_enstr + '&sex=' + sex + '&birthdat=' + birthday + '&name=' + name);
    persistence.saveLinkedLog('10000000002', '高歌医生', name, gor_enstr, sex);
});

router.get('/myh', function(req, res, next) {
    //手机号加密串
    var gor_enstr = req.params.gor_enstr;
    //0 未知 1男 2女
    var sex = req.params.sex;
    //yyyy-MM-dd类型
    var birthday = req.params.birthday;
    //partnerkey
    var partnerkey = req.params.partnerkey;
    //medicaldesc
    var medicaldesc = req.params.medicaldesc;
    //name  账户姓名
    var name = req.params.name;

    persistence.saveLinkedLog('10000000001', '我的健康', name, gor_enstr, sex);

});

module.exports = router;
