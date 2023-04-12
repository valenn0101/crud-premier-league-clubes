const clubInfo = require('../database/clubInfo');

const getAllClub = () => {
  const allClubs = clubInfo.getAllClubs();
  return allClubs;
};
const getOneClub = () => {

};
const createNewClub = () => {

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
