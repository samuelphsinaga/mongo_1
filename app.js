var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name : String,
  age : Number,
  temperament : String
});

var Cat = mongoose.model("Cat", catSchema);

// //adding new cat to DB
// var sule = new Cat({
//   name : "Sule",
//   age : "7",
//   temperament : "Evil"
// })
//  sule.save(function (err, cat) {
//    if (err){
//      console.log(err);
//    } else {
//      console.log("data saved : \n" +cat);
//    }
// });

// Cat.create({
//   name : "Pop",
//   age : "100",
//   temperament : "Imortal"
// }, function (err, cat) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(cat);
//   }
// })



//retrieve all cats from DB and console.log each one

Cat.find({}, function(err, cats) {
  if(err){
    console.log("ERROR COIIIIII \n" +err);
  } else {
    console.log("ISI CATS ADALAH : \n" +cats);
  }
})











