const clubService = require('../services/clubService');

const getAllClub = (req, res) => {
  const allClub = clubService.getAllClub();
  res.send({ status: 'OK', data: allClub });
};

const getOneClub = (req, res) => {
  const OneClub = clubService.getOneClub(req.params.clubId);
  res.send(`Get club ${req.params.clubId}`);
};

const createNewClub = (req, res) => {
  const { body } = req;
  if (!body.name || !body.tla || !body.crestUrl || !body.clubColors || !body.venue) {
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
  const updatedClub = clubService.updateOneClub(req.params.clubId);
  res.send(`Update club ${req.params.clubId}`);
};

const delateOneClub = (req, res) => {
  const delatedClub = clubService.delateOneClub(req.params.clubId);
  res.send(`Delate club ${req.params.clubId}`);
};

module.exports = {
  getAllClub,
  getOneClub,
  createNewClub,
  updateOneClub,
  delateOneClub,
};
