var express = require('express');
var router = express.Router();

/* GET article page. */
router.get('/', function (req, res, next) {
    res.render('about', {
        page: 'about'
    });
});

module.exports = router;