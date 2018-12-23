let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('chat', { title: 'Chat' });
});

module.exports = router;
