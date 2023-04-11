const clubService = require('../services/clubService');

const getAllClub = (req, res) => {
  const allClub = clubService.allClub();
  res.send('Get all club');
};

const getOneClub = (req, res) => {
  const OneClub = clubService.getOneClub(req.params.clubId);
  res.send(`Get club ${req.params.clubId}`);
};

const createNewClub = (req, res) => {
  const createdClub = clubService.createClub(req.params.clubId);
  res.send(`Create club ${req.params.clubId}`);
};

const updateOneClub = (req, res) => {
  const updatedClub = clubService.updatedClub(req.params.clubId);
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
