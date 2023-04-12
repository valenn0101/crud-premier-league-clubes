const DB = require('./db.json');

const getAllClubs = () => DB.clubs;

module.exports = {
  getAllClubs,
};
