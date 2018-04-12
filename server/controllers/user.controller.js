const User = require('../models/user');

module.exports = {
  signup: function(){
    res.status(200).json({
      message: "success Sign up"
    })
  },
  signin: function(){
    res.status(200).json({
      message: "Succes Login"
    })
  },
  viewUser: function(){
    console.log('Masuk ke viewUser');
    User.find()
        .exec()
        .then(userData =>{
          res.status(200).json({
            message: "Show All User",
            user: userData
          })
        })
        .catch(err =>{
          res.status(500).json({
            message: err
          })
        })
  }
}
