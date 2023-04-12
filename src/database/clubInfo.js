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

const updateOneClub = (clubId, changes) => {
  const indexForUpdated = DB.clubs.findIndex((club) => club.id === clubId);

  if (indexForUpdated === -1) {
    return;
  }

  const updatedClub = {
    ...DB.clubs[indexForUpdated],
    ...changes,
    updatedAt: new Date().toISOString('es-ARG', { timeZone: 'GMT-3' }),
  };

  DB.clubs[indexForUpdated] = updatedClub;
  saveToDB(DB);
  return updatedClub;
};

const deleteOneClub = (clubId) => {
  const indexForDeleted = DB.clubs.findIndex(
    (club) => club.id === clubId,
  );

  if (indexForDeleted === -1) {
    return;
  }

  DB.clubs.splice(indexForDeleted, 1);
  saveToDB(DB);
};

module.exports = {
  getAllClubs, createNewClub, getOneClub, updateOneClub, deleteOneClub,
};
