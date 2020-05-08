var express = require('express');
var router = express.Router();

var request = require('request');
var sharp = require('sharp');

router.get('/:name', function (req, res, next) {
    let options = {
        url: `http://${process.env.STRAPI_URI}/uploads/${req.params.name}`,
        method: 'get',
        encoding: null
    };
    request(options, (err, response, body) => {
        if (err) {
            next(err);
            return;
        }
        sharp(body)
            .rotate()
            .resize(1200, 1200)
            .max()
            .withoutEnlargement()
            .jpeg({
                quality: 85
            })
            .pipe(res)
    });
});

module.exports = router;