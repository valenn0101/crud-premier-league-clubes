const clubService = require('../services/clubService');

const getAllClub = (req, res) => {
  console.log('getAllClub');
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const allClub = clubService.getAllClub().slice(0, limit);
  res.render('home_teams', {
    layout: 'ui',
    equipos: allClub,
  });
};

const getOneClub = (req, res) => {
  console.log('getOneClub');

  const {
    params: { clubId },
  } = req;

  if (!clubId) {
    return;
  }

  const club = clubService.getOneClub(clubId);
  res.send({ status: 'OK', data: club });
};

const showForm = (req, res) => {
  console.log('showForm');
  res.render('form', {
    layout: 'ui',
  });
};

const createNewClub = (req, res) => {
  console.log('createNewClub');
  const { body, file } = req;
  console.log(body);
  const requiredFields = ['name', 'tla', 'clubColors', 'venue', 'founded'];
  const missingFields = requiredFields.filter((field) => !body[field]);
  if (missingFields.length) {
    const errorMessage = `Missing required fields: ${missingFields.join(', ')}`;
    return res.status(400).json({ error: errorMessage });
  }
  const newClub = {
    name: body.name,
    shortName: body.shortName,
    tla: body.tla,
    email: body.email,
    phone: body.phone,
    website: body.website,
    founded: body.founded,
    clubColors: body.clubColors,
    venue: body.venue,
    address: body.address,
    crestUrl: file ? file.filename : body.crestUrl,
  };
  console.log('newClub', newClub);
  const createdClub = clubService.createNewClub(newClub);
  res.status(201).send({ status: 'OK', data: createdClub });
  res.redirect('/api/v1/clubs');
};

const updateOneClub = (req, res) => {
  const {
    body,
    params: { clubId },
  } = req;

  if (!clubId) {
    return;
  }

  const updatedClub = clubService.updateOneClub(clubId, body);
  res.send({ status: 'OK', data: updatedClub });
};
const deleteOneClub = (req, res) => {
  console.log('Borrar');

  const {
    params: { clubId },
  } = req;

  if (!clubId) {
    return;
  }

  clubService.delateOneClub(clubId);
  res.status(204).send({ status: 'OK' }).redirect('/');
};

module.exports = {
  getAllClub,
  getOneClub,
  showForm,
  createNewClub,
  updateOneClub,
  deleteOneClub,
};
