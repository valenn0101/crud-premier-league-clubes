const clubService = require('../services/clubService');

const getAllClub = (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 20;
  const allClub = clubService.getAllClub().slice(0, limit);
  res.render('home_teams', {
    layout: 'ui',
    equipos: allClub,
  });
};

const getOneClub = (req, res) => {
  const {
    params: { clubId },
  } = req;

  if (!clubId) {
    return;
  }

  const club = clubService.getOneClub(clubId);
  res.send({ status: 'OK', data: club });
};

const createNewClub = (req, res) => {
  const { body } = req;
  if (
    !body.name
    || !body.tla
    || !body.crestUrl
    || !body.clubColors
    || !body.venue
  ) {
    return;
  }
  const newClub = {
    name: body.name,
    shortName: body.shortName,
    tla: body.tla,
    crestUrl: body.crestUrl,
    address: body.address,
    phone: body.phone,
    website: body.website,
    email: body.email,
    founded: body.founded,
    clubColors: body.clubColors,
    venue: body.venue,
  };
  console.log('newClub', newClub);
  const createdClub = clubService.createNewClub(newClub);
  res.status(201).send({ status: 'OK', data: createdClub });
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
  const {
    params: { clubId },
  } = req;
  if (!clubId) {
    return;
  }

  clubService.delateOneClub(req.params.clubId);
  res.status(204).send(`Delate club ${req.params.clubId}`);
};

module.exports = {
  getAllClub,
  getOneClub,
  createNewClub,
  updateOneClub,
  deleteOneClub,
};
