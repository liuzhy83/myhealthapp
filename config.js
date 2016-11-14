var path = require('path');

module.exports = {
    //全局配置
    debug: true,
    //服务器配置
    server: {
        host: '0.0.0.0',
        port: '3001'
    },
    //redis配置
    redis: {
        host: '192.168.188.73',
        port: '6379',
        db: '',
        password: ''
    },
    //mongoDB配置
    mongodb: {
        url: 'mongodb://lifesea:lifesea@192.168.188.73:27017/myhealth'
    },

    apps: {
        gg: {
            appkey: '86cddfd688474137aae4cae43518113b',
            secret: 'c2b05b36381a41fe87d680fed382b881'
        }
    }

};