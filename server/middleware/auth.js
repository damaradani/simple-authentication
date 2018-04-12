var jwt = require('jsonwebtoken');

module.exports = {
  loginAuth: function(req, res, next){
    let token = req.headers.token
    // let decoded = jwt.verify(token, 'sementara')
    jwt.verify(token, 'sementara', function(err, decoded) {
      console.log(decoded) // bar
      if(decoded){
        next()
      }else{
        res.status(400).json({
          message: "U need to Login"
        })
      }
    });


  }
}
