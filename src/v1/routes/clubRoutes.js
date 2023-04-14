const express = require('express');

const router = express.Router();

const clubController = require('../../controllers/clubController');
const { upload } = require('../../../multer');

router
  .get('/', clubController.getAllClub)

  .get('/show/:clubId', clubController.getOneClub)

  .get('/createClub', clubController.showForm)

  .post('/createClub', upload.single('crestFile'), clubController.createNewClub)

  .patch('/:clubId', clubController.updateOneClub)

  .delete('/delete/:clubId', clubController.deleteOneClub);

module.exports = router;
