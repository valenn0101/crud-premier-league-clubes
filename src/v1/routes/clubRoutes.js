const express = require('express');

const router = express.router();

router
  .get('/', (req, res) => {
    res.send('Gett all clubs');
  })

  .get('/:clubId', (req, res) => {
    res.send(`Get club ${req.params.clubId}`);
  })

  .post('/:clubId', (req, res) => {
    res.send(`Create club ${req.params.clubId}`);
  })

  .patch('/:clubId', (req, res) => {
    res.send(`Update club ${req.params.clubId}`);
  })
  .delete('/:clubId', (req, res) => {
    res.send(`Delete club ${req.params.clubId}`);
  });

module.exports = router;
