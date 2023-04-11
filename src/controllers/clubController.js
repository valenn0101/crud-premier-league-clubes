const getAllClub = (req, res) => {
  res.send('Get all club');
};

const getOneClub = (req, res) => {
  res.send(`Get club ${req.params.clubId}`);
};

const createNewClub = (req, res) => {
  res.send(`Create club ${req.params.clubId}`);
};

const updateOneClub = (req, res) => {
  res.send(`Update club ${req.params.clubId}`);
};

const delateOneClub = (req, res) => {
  res.send(`Delate club ${req.params.clubId}`);
};

module.exports = {
  getAllClub,
  getOneClub,
  createNewClub,
  updateOneClub,
  delateOneClub,
};
