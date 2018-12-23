/*
 * 判断用户是否已经注册的函数
 */
exports.isReg = (usrObj, users) => {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.userName === usrObj.userName) {
            return user;
        }
    }
}

exports.users = [];