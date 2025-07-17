const fs = require('fs');
const path = require('path');
const indexData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/index.json'), 'utf8'));

/* GET Homepage */
const index = (req, res) => {
  res.render('index', { title: 'Travlr Getaways', indexData });
};

module.exports = {
  index
};