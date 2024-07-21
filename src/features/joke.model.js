const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema(
  {
    jokeType: {
      type: String,
      required: true,
    },
    joke: {
      type: String,
      required: true,
    },
    moderatedStatus: {
      type: Boolean,
      default: false,
    },
    submitter: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
