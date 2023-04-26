const express = require('express');

const router = express.Router();

const clubController = require('../../controllers/clubController');
const { upload } = require('../../../multer');

router
  .get('/', clubController.getAllClub)

  .get('/show/:clubId', clubController.getOneClub)

  .get('/createClub', clubController.showForm)

  .post('/createClub', upload.single('crestLocal'), clubController.createNewClub)

  .get('/edit/:clubId', clubController.editOneClub)

  .post('/editClub/:clubId', upload.single('crestLocal'), clubController.updateOneClub)

  .get('/delete/:clubId', clubController.deleteOneClub);

module.exports = router;
