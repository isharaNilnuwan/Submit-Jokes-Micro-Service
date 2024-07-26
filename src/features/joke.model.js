const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    approved: {
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
