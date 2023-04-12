const { v4: uuid } = require('uuid');
const clubInfo = require('../database/clubInfo');

const getAllClub = () => {
  const allClubs = clubInfo.getAllClubs();
  return allClubs;
};
const getOneClub = () => {

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
const updateOneClub = () => {

};
const delateOneClub = () => {

};

module.exports = {
  getAllClub,
  getOneClub,
  createNewClub,
  updateOneClub,
  delateOneClub,
};
