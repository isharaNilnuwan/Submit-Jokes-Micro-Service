const jokesModel = require("./joke.model");

async function getAll() {
  return jokesModel.find();
}

async function get(id) {
  return jokesModel.findOne({ _id: id });
}

async function getUnModeratedJokes() {
    return jokesModel.find({ approved: false });
  }

async function create(data) {
    console.log("servuce create data", data)
  return new jokesModel(data).save();
}

async function update(id, data) {
  return jokesModel.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return jokesModel.findByIdAndDelete(id);
}

module.exports = {getAll, get, create, update, remove, getUnModeratedJokes}