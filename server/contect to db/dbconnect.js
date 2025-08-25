
const { default: mongoose } = require("mongoose");
require('dotenv').config()

const dbURL = process.env.DB_URL


const connectToDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(dbURL);
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDB;
