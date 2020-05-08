var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    request(`http://${process.env.STRAPI_URI}/story`,
        (err, response, body) => {
            if (err) {
                next(err);
                return;
            }
            let articles = JSON.parse(body);
            articles = articles.map(article => {
                article.Snippet = article.Text.slice(0, 140) + " . . .";
                return article;
            });
            res.render('index', {
                page: 'index',
                articles
            });
        });
});

module.exports = router;