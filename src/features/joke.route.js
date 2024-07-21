const express = require('express')
const jokeController = require("./joke.controller");

const router = express.Router();

router.get('/', jokeController.getAll);

// router.get('/:id', jokeController.get);

router.get('/getNewjokes', jokeController.getUnModeratedJokes);

router.post('/addNewjoke', jokeController.create);

router.get('/getJokeTypes', jokeController.getJokeTypes);

router.put('/editJokes/:id', jokeController.update);

router.delete('/:id', jokeController.remove);

module.exports = router;