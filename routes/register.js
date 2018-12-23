let express = require('express');
let router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

// 定义用户数组
let users = [];

router.post('/', function(req, res, next) {
    // 获取前端传过来的数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    // 创建用户对象
    let regUser = {
        userName,
        loginPwd
    }

    // 验证用户是否已经注册
    let user = isReg(regUser);
    if (user === null || user === undefined){
        users.push(regUser);
        //res.send("用户注册成功！");

        // 重定向到登陆
        res.redirect("/login");
    } else {
        res.send("用户已注册！");
    }

});

/*
 * 判断用户是否已经注册的函数
 */
let isReg = (usrObj) => {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.userName === usrObj.userName) {
            return user;
        }
    }
}

module.exports = router;