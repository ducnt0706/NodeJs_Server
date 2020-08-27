const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Season Schema
const SeasonSchema = new Schema({
  name: {
    type: String,
    default: "Spring",
  },
  time: {
    type: [Number],
    default: [1, 2, 3],
  },
});

const FruitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    default: 10000,
  },
  //Add Season
  season: SeasonSchema,
});

//Create a colletion that named fruits
const Fruit = mongoose.model("fruits", FruitSchema);

module.exports = Fruit;
