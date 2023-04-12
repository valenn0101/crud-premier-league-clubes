const DB = require('./db.json');
const { saveToDB } = require('./utils');

const getAllClubs = () => DB.clubs;

const createNewClub = (newClub) => {
  const isAlreadyAdded = DB.clubs.findIndex((club) => club.tla === newClub.tla);

  if (isAlreadyAdded) {
    return;
  }

  DB.clubs.push(newClub);
  saveToDB(DB);
};

module.exports = {
  getAllClubs, createNewClub,
};
