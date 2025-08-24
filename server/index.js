const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");
const connectToDB = require("./contect to db/dbconnect");

const app = express();
const PORT = 6969;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// try {
//     mongoose.connect(process.env.MONGO_URL);
//     console.log("Connection Successfull");
// } catch (error) {
//     console.log(error);
// }

app.get("/", (req, res) => {
    res.send("Server Is Running");
});


app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/files", express.static("files"));

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
    connectToDB();
})