const fs = require('fs');
const path = require('path');
const aboutData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/about.json'), 'utf8'));

/* GET about view */
const about = (req, res) => {
  res.render('about', { title: 'Travlr Getaways', aboutData });
};

module.exports = {
  about
};