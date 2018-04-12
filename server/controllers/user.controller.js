const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

module.exports = {
  signup: function(req, res){
    let password = req.body.password
    let email = req.body.email
    // console.log(password);
    bcrypt.hash(password, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      // console.log(hash);
      if(err){
        console.log(err);
      }else{
        let newUser = new User({
          email,
          password:hash
        })

        newUser.save()
               .then(user =>{
                 res.status(200).json({
                   message: "success Sign up",
                   newUser
                 })
               })
               .catch(err =>{
                 res.status(500).json({
                   message: err
                 })
               })
        // console.log(newUser);
      }

    });

    //console.log(req.body);




  },
  signin: function(req, res){
    let email = req.body.email
    let password = req.body.password
    console.log(req.body);
    User.findOne({email})
        .exec()
        .then(user =>{
          if(user){
            bcrypt.compare(password, user.password, function(err, response) {
              if(err){
                res.status(500).json({
                  message: err
                })
              }else{
                if(response){
                  var token = jwt.sign({ id:user._id, email:user.email }, 'sementara');
                  res.status(200).json({
                    message: "Succes Login",
                    user,
                    token
                  })
                }else{
                  res.status(500).json({
                    message: "something went wrong"
                  })
                }
              }
            });

          }else{
            res.status(400).json({
              message: 'email or password is wrong!'
            })
          }

        })
        .catch(err => {
          res.status(500).json({
            message: err
          })
        })


  },
  viewUser: function(req, res){
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
