const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'
const promise0 = Recipe.create({
  title: "Orange and Milk-Braised Pork Carnitas",
  level: "UltraPro Chef",
  ingredients: [
    "3 1/2 pounds boneless pork shoulder, cut into large pieces",
    "1 tablespoon freshly ground black pepper",
    "1 tablespoon kosher salt, or more to taste",
    "2 tablespoons vegetable oil",
    "2 bay leaves",
    "2 teaspoons ground cumin",
    "1 teaspoon dried oregano",
    "1/4 teaspoon cayenne pepper",
    "1 orange, juiced and zested"
  ],
  cuisine: "American",
  dishType: "Dish",
  image: "https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg",
  duration: 160,
  creator: "Chef John"
})

const promise1 = Recipe.insertMany(data)
const promise2 = Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100},{new: true})
const promise3 = Recipe.deleteOne({title:"Carrot Cake"})
// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
    return Promise.all([ promise0, promise1, promise2, promise3])
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Recipe.create({
//   title: "Orange and Milk-Braised Pork Carnitas",
//   level: "UltraPro Chef",
//   ingredients: [
//     "3 1/2 pounds boneless pork shoulder, cut into large pieces",
//     "1 tablespoon freshly ground black pepper",
//     "1 tablespoon kosher salt, or more to taste",
//     "2 tablespoons vegetable oil",
//     "2 bay leaves",
//     "2 teaspoons ground cumin",
//     "1 teaspoon dried oregano",
//     "1/4 teaspoon cayenne pepper",
//     "1 orange, juiced and zested"
//   ],
//   cuisine: "American",
//   dishType: "Dish",
//   image: "https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg",
//   duration: 160,
//   creator: "Chef John"
// })
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err)
// })

// const promise4 = mongoose.connection.close()

  


// Recipe.insertMany(data)
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err)
// })

// Recipe.updateOne({title:"Rigatoni alla Genovese"},{duration:100})
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err)
// })
// Recipe.deleteOne({title:"Carrot Cake"})
// .then(data => {
//   console.log(data)
//   console.log("success in deletion of element!!!")
// })
// .catch(err => {
//   console.log(err)
// })