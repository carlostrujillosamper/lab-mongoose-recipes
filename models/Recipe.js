const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  title: String,
  level: String,
  ingredients: [],
  cuisine: String,
  dishType: {type :String, enum:["Breakfast","Dish","Snack","Drink","Dessert","Other"]},
  image: {type:  String, default : "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: Number,
  creator: String ,
  date :{type : Date , default : Date.now} 
});


const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
