const DB = require('./db.json');
const { saveToDB } = require('./utils');

const getAllClubs = () => DB.clubs;

const getOneClub = (clubId) => {
  const $club = DB.clubs.find((club) => club.id === clubId);
  if (!$club) {
    return;
  }
  return $club;
};

const createNewClub = (newClub) => {
  const isAlreadyAdded = DB.clubs.findIndex((club) => club.tla === newClub.tla) > -1;

  if (isAlreadyAdded) {
    return;
  }

  DB.clubs.push(newClub);
  saveToDB(DB, (err) => {
    if (err) {
      console.error(err);
    }
  });
  return newClub;
};

module.exports = {
  getAllClubs, createNewClub, getOneClub,
};
