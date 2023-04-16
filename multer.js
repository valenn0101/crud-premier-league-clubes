const multer = require('multer');

const storageLocate = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.crestLocal}`);
  },
});
const upload = multer({ storage: storageLocate });

module.exports = {
  upload,
};
