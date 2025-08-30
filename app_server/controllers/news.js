var fs = require('fs');
var path = require('path');
var newsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/news.json'), 'utf8'));

/* GET news view */
const news = (req, res) => {
  res.render('news', { title: 'Travlr Getaways', newsData });
};

module.exports = {
  news
};