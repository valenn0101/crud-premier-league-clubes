const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const v1ClubRouter = require('./v1/routes/clubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/public', express.static('public'));
app.use(express.json());
app.use('/api/v1/clubs', v1ClubRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
