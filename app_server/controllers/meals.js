var fs = require('fs'); 
var mealsList = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
  res.render('meals', { title: 'Travlr Getaways', mealsList });
};

module.exports = {
  meals
};