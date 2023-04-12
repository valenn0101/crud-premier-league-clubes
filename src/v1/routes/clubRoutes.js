const express = require('express');

const router = express.Router();

const clubController = require('../../controllers/clubController');

router
  .get('/', clubController.getAllClub)

  .get('/:clubId', clubController.getOneClub)

  .post('/', clubController.createNewClub)

  .patch('/:clubId', clubController.updateOneClub)

  .delete('/:clubId', clubController.deleteOneClub);

module.exports = router;
