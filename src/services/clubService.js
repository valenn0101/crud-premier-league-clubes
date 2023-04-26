const { v4: uuid } = require('uuid');
const axios = require('axios');
const clubInfo = require('../database/clubInfo');

const getAllClub = () => {
  const allClubs = clubInfo.getAllClubs();
  return allClubs;
};
const getOneClub = (clubId) => {
  const club = clubInfo.getOneClub(clubId);
  return club;
};
const createNewClub = (newClub) => {
  const clubToInsert = {
    ...newClub,
    id: uuid(),
    createdAt: new Date().toISOString('es-ARG', { timeZone: 'GMT-3' }),
    updatedAt: new Date().toISOString('es-ARG', { timeZone: 'GMT-3' }),
  };

  const createdClub = clubInfo.createNewClub(clubToInsert);
  return createdClub;
};

const updateOneClub = (clubId, changes) => {
  const updatedClub = clubInfo.updateOneClub(clubId, changes);
  return updatedClub;
};

const delateOneClub = (clubId) => {
  clubInfo.deleteOneClub(clubId);
};

module.exports = {
  getAllClub,
  getOneClub,
  createNewClub,
  updateOneClub,
  delateOneClub,
};
