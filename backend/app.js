const express = require('express');
const cors = require("cors");

const app = express();
const { MongoClient } = require("mongodb");
const routeUrls = require('./routes/routes');
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
const uri = process.env.DATABASE_ACCESS;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
  keepAlive: 1
});
async function run() {
  try {
    await client.connect();
    console.log('running');
  } finally {
    // Ensures that the client will close when you finish/error
  }
}

run().catch(console.dir);


app.use(express.json());
app.use(cors());
app.use('/backend', routeUrls);



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chiho Liu application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
