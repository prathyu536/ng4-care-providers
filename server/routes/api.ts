const express: any = require('express');
const router: any = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
