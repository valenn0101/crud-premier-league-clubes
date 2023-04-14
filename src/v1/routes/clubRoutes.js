const express = require('express');

const router = express.Router();

const clubController = require('../../controllers/clubController');

router
  .get('/', clubController.getAllClub)

  .get('/show/:clubId', clubController.getOneClub)

  .get('/createClub', clubController.showForm)

  .post('/createClub', clubController.createNewClub)

  .patch('/:clubId', clubController.updateOneClub)

  .delete('/:clubId', clubController.deleteOneClub);

module.exports = router;
