const router = require('express').Router();
const {viewUser, signin, signup} = require('../controllers/user.controller');
const {loginAuth} = require('../middleware/auth');


/* GET users listing. */
router.get('/', loginAuth, viewUser)
      .post('/signin', signin)
      .post('/signup', signup)

module.exports = router;
