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
    params: { clubId, file },
  } = req;

  if (!clubId) {
    return;
  }

  const club = clubService.getOneClub(clubId);
  res.render('team', {
    layout: 'ui',
    id: club.id,
    name: club.name,
    shortName: club.shortName,
    tla: club.tla,
    email: club.email,
    phone: club.phone,
    website: club.website,
    founded: club.founded,
    clubColors: club.clubColors,
    venue: club.venue,
    address: club.address,
    crestUrl: file ? file.filename : club.crestUrl,
  });
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
  const createdClub = clubService.createNewClub(newClub);
  res.redirect('/api/v1/clubs');
};

const editOneClub = (req, res) => {
  const { clubId, file } = req.params;
  const club = clubService.getOneClub(clubId);

  if (!club) {
    return res.status(404).json({ error: 'Club not found' });
  }

  res.render('formEdit', {
    layout: 'ui',
    id: club.id,
    name: club.name,
    shortName: club.shortName,
    tla: club.tla,
    email: club.email,
    phone: club.phone,
    website: club.website,
    founded: club.founded,
    clubColors: club.clubColors,
    venue: club.venue,
    address: club.address,
    crestUrl: file ? file.filename : club.crestUrl,
  });
};

const updateOneClub = (req, res) => {
  const method = req.body._method;
  const {
    body,
    params: { clubId },
  } = req;

  if (!clubId) {
    return res.status(404).send({ Error: 'CLUB NOT FOUND' });
  }

  clubService.updateOneClub(clubId, body);
  res.redirect('/api/v1/clubs');
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
  res.status(204).send({ status: 'OK' });
};

module.exports = {
  getAllClub,
  getOneClub,
  showForm,
  createNewClub,
  editOneClub,
  updateOneClub,
  deleteOneClub,
};
