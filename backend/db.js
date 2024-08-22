require('dotenv').config()
const mongoose = require("mongoose");
const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const db = mongoose.connection.db;
    const foodItemsCollection = db.collection('food_items');
    const foodItems = await foodItemsCollection.find({}).toArray();
    global.food_items = foodItems;

    const foodCatoriesCollection = db.collection('foodCategory');
    const foodCategories = await foodCatoriesCollection.find({}).toArray();
    global.foodCategory = foodCategories;
    // console.log(global.foodCategory);
    // console.log('Fetched Food Items:', global.food_items);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};
module.exports = mongoDB;
