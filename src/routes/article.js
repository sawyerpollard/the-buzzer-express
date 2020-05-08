var express = require('express');
var router = express.Router();

var request = require('request');

/* GET article page. */
router.get('/:articleId', function (req, res, next) {
    request(`http://${process.env.STRAPI_URI}/story/${req.params.articleId}`,
        (err, response, body) => {
            if (err) {
                next(err);
                return;
            }
            let article = JSON.parse(body);
            res.render('article', article);
        });
});

module.exports = router;