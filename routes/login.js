let express = require('express');
let router = express.Router();
let util = require("./../utils/utils");



/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});


router.post('/', function(req, res, next) {

    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    let loginUser = {
        userName,
        loginPwd
    }

    let users = util.users;
    let user = util.isReg(loginUser, users);

    if (user != null && user != undefined) {
        for (let i = 0; i < users.length; i++) {
            let regUse = users[i];

            if (loginUser.userName === regUse.userName &&
                loginUser.loginPwd === regUse.loginPwd) {
                res.redirect('/');
            } else {
                res.send("密码错误！！！");
            }
        }
    } else {
        res.send("用户没有注册!");
    }

    console.log(req.body.userName);
    console.log(req.body.loginPwd);
});
module.exports = router;