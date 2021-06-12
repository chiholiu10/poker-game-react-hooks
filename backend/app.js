const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const routeUrls = require('./routes/routes');
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
const uri = process.env.DATABASE_ACCESS;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
  keepAlive: 1
}, () => console.log('database connected'));

app.use(express.json());
app.use(cors());
app.use('/app', routeUrls);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chiho Liu application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

