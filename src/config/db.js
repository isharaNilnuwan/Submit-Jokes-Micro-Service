require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
  const url =  process.env.MONGO_URI;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log(`Database connected: ${url}`);
  }).catch(err => {
    console.error(`Connection error: ${err.message}`);
    process.exit(1);
  });

  // Optionally, handle further connection events if needed
  mongoose.connection.once('open', () => {
    console.log(`Database connection opened`);
  });

  mongoose.connection.on('error', err => {
    console.error(`Connection error: ${err}`);
  });
}

module.exports = connectDB;