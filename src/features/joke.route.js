const express = require('express')
const jokeController = require("./joke.controller");
const apikeyValidator = require("./authValidation.middleware")

const router = express.Router();

router.get('/', jokeController.getAll);

// router.get('/:id', jokeController.get);

router.get('/getNewjokes', apikeyValidator, jokeController.getUnModeratedJokes);

router.post('/addNewjoke', jokeController.create);

router.get('/getJokeTypes', jokeController.getJokeTypes);

router.put('/editJokes/:id', apikeyValidator, jokeController.update);

router.delete('/rejectJokes/:id', apikeyValidator, jokeController.remove);

module.exports = router;