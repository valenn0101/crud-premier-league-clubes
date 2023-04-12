const express = require('express');
const v1ClubRouter = require('./v1/routes/clubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/clubs', v1ClubRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
