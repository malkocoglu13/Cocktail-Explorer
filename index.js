import express from "express";
import axios from "axios";
import path from "path";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const apiUrl = process.env.API_URL; // Access the API URL from environment variables
    const result = await axios.get(apiUrl);
    res.render("index.ejs", {
      content: result.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
