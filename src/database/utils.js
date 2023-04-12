const fs = require('fs');

const saveToDB = (DB) => {
  fs.writeFile('./src/database/db.json', JSON.stringify(DB, null, 2), {
    encoding: 'utf-8',
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('DB saved successfully!');
    }
  });
};

module.exports = { saveToDB };
