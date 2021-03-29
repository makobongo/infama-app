var express = require('express');
var router = express.Router();
var shortUrl = require('node-url-shortener');

var urls = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  shortUrl.short(urls[0], function(err, url){
    var myurl  = url.length === 18 ? 'no url specified': url
    res.render('index', { title: myurl });
  });
  urls = [];
});
router.post('/shorten_link', function(req, res, next) {
  urls = [];
  urls.push(req.body.url);
  res.redirect('/');
});

module.exports = router;
