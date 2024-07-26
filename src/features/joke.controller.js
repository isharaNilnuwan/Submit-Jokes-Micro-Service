const jokeService = require("./joke.service");

async function getAll(req, res, next) {
    console.log("get all controller");
    try {
        res.json(await jokeService.getAll());
    } catch (error) {
        console.error(`Error while getting the lists`, error.message);
      next(error);
    }
}

async function get(req, res, next) {
    console.log("get  controller")
    try {
      res.json(await jokeService.get(req.params.id));
    } catch (err) {
      console.error(`Error while getting the list`, err.message);
      next(err);
    }
  }

  async function getUnModeratedJokes(req, res, next) {
    console.log("get  controller")
    try {
      res.json(await jokeService.getUnModeratedJokes(req.params.id));
    } catch (err) {
      console.error(`Error while getting the list`, err.message);
      next(err);
    }
  }

  async function getJokeTypes(req, res, next) {
    console.log("get  controller")
    try {
      res.json({success : "get jokes from deliver micro service"});
    } catch (err) {
      console.error(`Error while getting the list`, err.message);
      next(err);
    }
  }
  
  
  async function create(req, res, next) {
    console.log("create controller")
    try {
      res.json(await jokeService.create(req.body));
    } catch (err) {
      console.error(`Error while creating the list`, err.message);
      next(err);
    }
  }
  
  async function update(req, res, next) {
    console.log("update  controller")
    try {
      res.json(await jokeService.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating the list`, err.message);
      next(err);
    }
  }
  
  async function remove(req, res, next) {
    console.log("#$ remove submit service", req.params.id)
    try {
      res.json(await jokeService.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting the list`, err.message);
      next(err);
    }
  }

  module.exports = {getAll, get, create, update, remove, getUnModeratedJokes, getJokeTypes}