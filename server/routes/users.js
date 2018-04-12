const router = require('express').Router();
const {viewUser, signin, signup} = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', viewUser);

module.exports = router;
