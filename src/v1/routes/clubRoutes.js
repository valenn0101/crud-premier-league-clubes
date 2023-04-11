const express = require('express');

const router = express.Router();

const clubController = require('../../controllers/clubController');

router
  .get('/', clubController.getAllClub)

  .get('/:clubId', clubController.getOneClub)

  .post('/:clubId', clubController.createNewClub)

  .patch('/:clubId', clubController.updateOneClub)

  .delete('/:clubId', clubController.delateOneClub);

module.exports = router;
